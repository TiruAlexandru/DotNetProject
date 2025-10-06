import { Group } from "@mui/icons-material";
import { AppBar, Box, Toolbar, Typography, Container, MenuItem, CircularProgress, Paper } from "@mui/material";
import { NavLink } from "react-router";
import MenuItemLink from "../shared/components/MenuItemLink";
import { Observer } from "mobx-react-lite";
import { useStore } from "../../lib/hooks/UseStore";
import { useAccount } from "../../lib/hooks/useAccount";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { uiStore } = useStore();
  const { currentUser } = useAccount();

  return (
    <Paper sx={{ flexGrow: 2 }}>
      <AppBar 
        position="fixed"
        sx={{
          backgroundImage: 'linear-gradient(135deg, rgba(24,42,115,0.9), rgba(33,138,174,0.9))',
          backdropFilter: 'blur(12px)',
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}>
        <Container maxWidth='xl' >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <MenuItem component={NavLink} to='/' sx={{ display: 'flex', gap: 2 }}>
                <Group fontSize="large" />
                <Typography
                  sx={{position: 'relative'}}
                  variant="h4" 
                  fontWeight={'bold'}>
                  Reativities
                </Typography>
                <Observer>
                  {() => uiStore.isLoading ? (
                    <CircularProgress
                      size={20}
                      thickness={7}
                      sx={{
                        color: 'white',
                        position: 'absolute',
                        top: '30%',
                        left: '105%'
                      }}></CircularProgress>
                  ) : null}
                </Observer>
              </MenuItem>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <MenuItemLink to='/activities'>
                Activities
              </MenuItemLink>
              <MenuItemLink to='/counter'>
                Counter
              </MenuItemLink>
              <MenuItemLink to='/errors'>
                Errors
              </MenuItemLink>
            </Box>
            <Box display='flex' alignItems='center'>
              {currentUser ? (
                <UserMenu />
              ) : (
                <>
                  <MenuItemLink to='/login'>Login</MenuItemLink>
                  <MenuItemLink to='/register'>Register</MenuItemLink>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Paper>
  )
}