import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../context/authContext.jsx';
import { Snackbar } from '@mui/material';

const defaultTheme = createTheme();

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                let result = await handleLogin(username, password);
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("");
                setFormState(0);
                setPassword("");
            }
        } catch (err) {
            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />

            <Box
                sx={{
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, #0f172a, #1e293b, #312e81)",
                }}
            >
                <Box
                    sx={{
                        width: "400px",
                        padding: "40px",
                        borderRadius: "16px",
                        background: "rgba(15, 23, 42, 0.9)",
                        backdropFilter: "blur(12px)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#2563eb' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    {/* Toggle Buttons */}
                    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                        <Button
                            variant={formState === 0 ? "contained" : "outlined"}
                            onClick={() => setFormState(0)}
                        >
                            Sign In
                        </Button>
                        <Button
                            variant={formState === 1 ? "contained" : "outlined"}
                            onClick={() => setFormState(1)}
                        >
                            Sign Up
                        </Button>
                    </Box>

                    {/* Form */}
                    <Box component="form" noValidate sx={{ width: "100%" }}>
                        
                        {formState === 1 && (
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                sx={textFieldStyle}
                            />
                        )}

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            sx={textFieldStyle}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={textFieldStyle}
                        />

                        <p style={{ color: "red", marginTop: "5px" }}>{error}</p>

                        <Button
                            fullWidth
                            variant="contained"
                            onClick={handleAuth}
                            sx={{
                                mt: 2,
                                background: "#2563eb",
                                fontWeight: "bold",
                                borderRadius: "8px",
                                '&:hover': {
                                    background: "#1d4ed8"
                                }
                            }}
                        >
                            {formState === 0 ? "Login" : "Register"}
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                message={message}
            />
        </ThemeProvider>
    );
}

/* 🔥 Reusable TextField styling */
const textFieldStyle = {
    input: { color: "white" },
    label: { color: "#aaa" },
    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#555' },
        '&:hover fieldset': { borderColor: '#888' },
        '&.Mui-focused fieldset': { borderColor: '#2563eb' },
    }
};