import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import { useAuth } from "../../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState(
    "aarne@flowforge.dev",
  );

  const [password, setPassword] = useState(
    "flow123",
  );

  const [error, setError] = useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const success = login(email, password);

    if (!success) {
      setError(true);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 420,
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
          >
            FlowForge
          </Typography>

          <Typography variant="h6">
            Welcome back
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Sign in and continue your flow.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              Invalid email or password.
            </Alert>
          )}

          <Box
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Email"
              type="email" 
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
              fullWidth
              required
              sx={{ mb: 2 }}
            />

            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              fullWidth
              required
              sx={{ mb: 3 }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
            >
              Enter FlowForge
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginPage;