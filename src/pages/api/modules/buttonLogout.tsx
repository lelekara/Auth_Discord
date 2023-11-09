import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { signOut } from 'next-auth/react';

export default function ButtonsLogout() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" onClick={() => signOut()}>logout</Button>
    </Stack>
  );
}