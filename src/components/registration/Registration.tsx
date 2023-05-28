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
import { zodResolver } from '@hookform/resolvers/zod';
import { TRegistrationForm, categories, registrationForm } from './registrationForm';
import { useMemo } from 'react';
import { format } from 'date-fns';

function Registration() {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
    register,
    setValue,
  } = useForm<TRegistrationForm>({
    resolver: zodResolver(registrationForm),
    defaultValues: {
      category: 'U12 Jongens',
    },
  });
  const { fields, append } = useFieldArray({
    control,
    name: 'players',
  });

  const getAllowedDateByCategory = useMemo((): Date => {
    switch (watch('category')) {
      case 'U12 Jongens':
        return new Date('2013-12-31');
      case 'U14 Jongens':
        return new Date('2011-12-31');
      case 'U16 Jongens':
        return new Date('2009-12-31');
      case 'U18 + Seniors':
        return new Date();
    }
  }, [watch('category')]);

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
          <Typography variant='h4'>Hoe ga je team noemen?</Typography>
          <TextField
            fullWidth
            error={!!errors?.name}
            helperText={errors?.name?.message}
            {...register('name')}
          />
          <Typography variant='h4'>Wie is de team capitain?</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                error={!!errors?.captain?.name}
                helperText={errors?.captain?.name?.message}
                label='Volledige Naam'
                {...register('captain.name')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                error={!!errors?.captain?.email}
                helperText={errors?.captain?.email?.message}
                label='Email'
                type='email'
                {...register('captain.email')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                error={!!errors?.captain?.phone}
                helperText={errors?.captain?.phone?.message}
                label='GSM Nummer'
                {...register('captain.phone')}
              />
            </Grid>
          </Grid>
          <hr />
          <Typography variant='h3'>Spelers</Typography>
          <Typography>
            Je team moet minimum bestaan uit 3 spelers en maximum 4 spelers. Hierbij is de team
            capitain al bijgerekend.
          </Typography>
          {fields.map((field, index) => (
            <Box bgcolor='secondary.main' padding={2} marginTop={2} key={field.id}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    error={!!errors?.players?.[index]?.name}
                    helperText={errors?.players?.[index]?.name?.message}
                    label='Volledige Naam'
                    {...register(`players.${index}.name`)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MobileDatePicker
                    label='Geboortedatum'
                    format='dd-MM-yyyy'
                    maxDate={getAllowedDateByCategory}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        error: !!errors?.players?.[index]?.birthday,
                        helperText: errors?.players?.[index]?.birthday?.message,
                      },
                    }}
                    onAccept={date =>
                      date && setValue(`players.${index}.birthday`, format(date, 'dd-MM-yyyy'))
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
          {errors?.players?.type === 'too_small' && watch('players').length < 2 && (
            <Typography color='primary.main'>{errors?.players?.message}</Typography>
          )}
          <Grid container marginTop={2} justifyContent='center'>
            <Button
              disabled={fields.length >= 3}
              variant='outlined'
              onClick={() => append({ name: '', birthday: '' })}
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
