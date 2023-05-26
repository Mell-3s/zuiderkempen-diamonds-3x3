import { Controller, useFieldArray, useForm } from 'react-hook-form';

import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';

const categories = ['U12 Jongens', 'U14 Jongens', 'U16 Jongens', 'U18 + Seniors'];

interface State {
  category: string;
  name: string;
  captain: {
    name: string;
    phone: string;
    email: string;
  };
  players: {
    name: string;
    birthday?: Date;
  }[];
}

const defaultValues: State = {
  category: 'U12 Jongens',
  name: '',
  captain: {
    name: '',
    phone: '',
    email: '',
  },
  players: [],
};

function Registration() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<State>({ defaultValues });
  const { fields, append } = useFieldArray({
    control,
    name: 'players',
    rules: {
      minLength: 3,
      required: true,
    },
  });

  return (
    <section className='registration'>
      <Container maxWidth='md'>
        <form onSubmit={handleSubmit(data => console.log(data))}>
          <Typography variant='h3'>Team details</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris eros, mattis et
            nunc non, condimentum sagittis lectus. Donec fringilla sapien sapien, at aliquam odio
            pulvinar ac
          </Typography>
          <Controller
            name='category'
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <RadioGroup {...field}>
                  <Grid container marginTop={2}>
                    {categories.map(category => (
                      <Grid item key={category} xs={6} md={3}>
                        <FormControlLabel
                          value={category}
                          control={<Radio />}
                          label={category}
                          componentsProps={{
                            typography: {
                              fontWeight: 600,
                            },
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </RadioGroup>
              </FormControl>
            )}
          />
          <Typography variant='h4'>Hoe ge je team noemen?</Typography>
          <Controller
            name='name'
            control={control}
            rules={{
              required: true,
              minLength: 3,
            }}
            render={({ field }) => (
              <TextField
                error={!!errors?.name}
                fullWidth
                helperText={!!errors?.name && 'De naam moet minstens 3 karakters lang zijn'}
                {...field}
              />
            )}
          />
          <Typography variant='h4'>Wie is de team capitain?</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name='captain.name'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    error={!!errors?.captain?.name}
                    fullWidth
                    label='Volledige Naam'
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name='captain.email'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    error={!!errors?.captain?.email}
                    fullWidth
                    label='Email'
                    type='email'
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Controller
                name='captain.phone'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <TextField
                    error={!!errors?.captain?.phone}
                    fullWidth
                    label='GSM Nummer'
                    {...field}
                  />
                )}
              />
            </Grid>
          </Grid>
          <hr />
          <Typography variant='h3'>Spelers</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mauris eros, mattis et
            nunc non, condimentum sagittis lectus. Donec fringilla sapien sapien, at aliquam odio
            pulvinar ac
          </Typography>
          {fields.map((field, index) => (
            <Box bgcolor='secondary.main' padding={2} marginTop={2} key={field.id}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Controller
                    name={`players.${index}.name`}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        error={!!errors?.players?.[index]?.name}
                        fullWidth
                        label='Volledige Naam'
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name={`players.${index}.birthday`}
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <MobileDatePicker
                        label='Geboorte Datum'
                        maxDate={new Date()}
                        slotProps={{
                          textField: {
                            fullWidth: true,
                            error: !!errors?.players?.[index]?.birthday,
                          },
                        }}
                        {...field}
                      />
                    )}
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
          <Grid container justifyContent='center' marginTop={2}>
            <Button
              disabled={fields.length >= 3}
              variant='outlined'
              onClick={() => append({ name: '' })}
              startIcon={<AddIcon />}
            >
              Speler toevoegen
            </Button>
          </Grid>
          <hr />
          <Grid container>
            <Grid item xs={12} md={4}>
              <Typography variant='h3'>Categorie</Typography>
              <Typography variant='h4'>{watch('category')}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h3'>Aantal deelnemers</Typography>
              <Typography variant='h4'>{fields.length + 1}</Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant='h3'>Inschrijving</Typography>
              <Typography variant='h4'>&euro;15</Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent='center'>
            <Button type='submit' variant='contained'>
              Inschrijven
            </Button>
          </Grid>
        </form>
      </Container>
    </section>
  );
}

export default Registration;
