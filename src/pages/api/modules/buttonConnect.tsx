import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';

export default function ButtonsLogin() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={() => signIn('discord')} >login</Button>
    </Stack>
  );
}