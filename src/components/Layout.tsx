import React, { useState } from 'react';

//Components
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Collapse from '@mui/material/Collapse';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//Dependencies
import { Avatar, Grid, ListSubheader } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { RiBankCardLine, RiCalendar2Fill, RiCalendarFill, RiEdit2Fill, RiEditFill, RiFile3Fill, RiFileAddFill, RiFileChartFill, RiFileEditFill, RiFileEditLine, RiFileFill, RiFileHistoryFill, RiFileLockFill, RiFileSearchLine, RiFileShield2Fill, RiFileWarningFill, RiFolderAddLine, RiFoldersFill, RiGlobalLine, RiGroupLine, RiHistoryLine, RiHome5Line, RiListCheck2, RiLogoutCircleRLine, RiMenuFoldLine, RiMenuUnfoldLine, RiUserLine, RiUserSettingsLine } from '@remixicon/react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../hooks/auth.hook';
import { props } from '../interfaces/props.interface';
import { logOut } from '../slices/auth.slice';
import { getCookie } from '../utils/cookies';
import { Settings } from '@mui/icons-material';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Layout = (props: props) => {
    const navigate = useNavigate();
    const [sidebarCollapse, setSidebarCollapse] = useState(false);
    const drawerWidth = sidebarCollapse ? 85 : 320;
    const { window: windowsPros } = props;
    const fullpath = window.location.pathname.split('/');
    const currentLocation = window.location.pathname.split('/')[1];
    const container = windowsPros !== undefined ? () => windowsPros().document.body : undefined;
    const dispatch = useDispatch();
    const auth = useAuth();

    const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openContactMenu, setOpenContactMenu] = React.useState(false);
    const [openRegisterMenu, setOpenRegisterMenu] = React.useState(false);
    const [openPerencanaanMenu, setOpenPerencanaanMenu] = React.useState(false);
    const [openPengawasanMenu, setOpenPengawasanMenu] = React.useState(false);
    const [openPascaPengawasanMenu, setOpenPascaPengawasanMenu] = React.useState(false);

    const openProfile = Boolean(anchorEl);

    const account_data = localStorage.getItem('account_name');

    const handleClickProfile = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseProfile = () => {
        setAnchorEl(null);
    };
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleContactMenu = () => {
        setSidebarCollapse(false)
        setOpenContactMenu(!openContactMenu);
    };
    const handleRegisterMenu = () => {
        setSidebarCollapse(false)
        setOpenRegisterMenu(!openRegisterMenu);
    };
    const handlePerencanaanMenu = () => {
        setSidebarCollapse(false)
        setOpenPerencanaanMenu(!openPerencanaanMenu);
    };
    const handlePengawasanMenu = () => {
        setSidebarCollapse(false)
        setOpenPengawasanMenu(!openPengawasanMenu);
    };
    const handlePascaPengawasanMenu = () => {
        setSidebarCollapse(false)
        setOpenPascaPengawasanMenu(!openPascaPengawasanMenu);
    };
    const name = getCookie('name');
    const avatar = getCookie('avatar');
    const drawer = (
        <>
            <Grid className='px-4 pt-2' container justifyContent={'space-between'}>
                <img
                    src={`/images/${!sidebarCollapse ? 'logo' : 'logo'}.png`}
                    alt="gakkum"
                    loading="lazy"
                    className={`${!sidebarCollapse ? 'h-[60px]' : 'h-[40px]'} cursor-pointer`}
                    onClick={() => navigate('/')}
                />
                <IconButton className='text-center w-full' hidden={!sidebarCollapse}
                    onClick={() => {
                        setSidebarCollapse(!sidebarCollapse)
                    }}
                >
                    <RiMenuUnfoldLine></RiMenuUnfoldLine>
                </IconButton>
                <IconButton hidden={sidebarCollapse}
                    onClick={() => {
                        setSidebarCollapse(!sidebarCollapse)
                    }}
                >
                    <RiMenuFoldLine></RiMenuFoldLine>
                </IconButton>
            </Grid>
            <List
                sx={{
                    '&& .Mui-selected, & .MuiListItemButton-root:hover': {
                        bgcolor: '#3c7d21',
                        borderRadius: '0.375rem',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        '&, & .MuiListItemIcon-root': {
                            color: 'white',
                        },
                    },
                    '.MuiListItemButton-root': {
                        paddingLeft: '12px',
                        paddingRight: '12px',
                    },
                    '& .Mui-selected:hover': {
                        bgcolor: 'white',
                        borderRadius: '0.375rem',
                        '&, & .MuiListItemIcon-root': {
                            color: '#3c7d21',
                        },
                    },
                }}
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Utama
                    </ListSubheader>
                }>
                <ListItem>
                    <ListItemButton
                        component={NavLink} to="/dashboard"
                        selected={currentLocation === 'dashboard'}
                    >
                        <ListItemIcon>
                            <HomeIcon className="ml-[2px]" />
                        </ListItemIcon>
                        <ListItemText primary='Dashboard' hidden={sidebarCollapse} />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton onClick={handleRegisterMenu} selected={currentLocation === 'register'}>
                        <ListItemIcon>
                            <RiFileAddFill className="ml-[2px]" />
                        </ListItemIcon>
                        <ListItemText primary='Registerasi' hidden={sidebarCollapse} />
                        {openRegisterMenu || `${fullpath[1]}/${fullpath[2]}` === 'register/daftar' || `${fullpath[1]}/${fullpath[2]}` === 'register/reguler' || `${fullpath[1]}/${fullpath[2]}` === 'register/insidental' || `${fullpath[1]}/${fullpath[2]}` === 'register/arsip' ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openRegisterMenu || `${fullpath[1]}/${fullpath[2]}` === 'register/daftar' || `${fullpath[1]}/${fullpath[2]}` === 'register/reguler' || `${fullpath[1]}/${fullpath[2]}` === 'register/insidental' || `${fullpath[1]}/${fullpath[2]}` === 'register/arsip'} timeout="auto" unmountOnExit>
                    <List component="div"
                        sx={{
                            '&& .Mui-selected, & .MuiListItemButton-root:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                            '.MuiListItemButton-root': {
                                paddingLeft: '12px',
                                paddingRight: '12px',
                            },
                            '& .Mui-selected:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                        }}>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/register/daftar" selected={`${fullpath[1]}/${fullpath[2]}` === 'register/daftar'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFileAddFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Daftar' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/register/reguler" selected={`${fullpath[1]}/${fullpath[2]}` === 'register/reguler'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFile3Fill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Reguler' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/register/insidental" selected={`${fullpath[1]}/${fullpath[2]}` === 'register/insidental'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFileLockFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Insidental' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/register/arsip" selected={`${fullpath[1]}/${fullpath[2]}` === 'register/arsip'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFoldersFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Arsip' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemButton onClick={handlePerencanaanMenu} selected={currentLocation === 'perencanaan'}>
                        <ListItemIcon>
                            <RiFileEditFill className="ml-[2px]" />
                        </ListItemIcon>
                        <ListItemText primary='Perencanaan' hidden={sidebarCollapse} />
                        {openPerencanaanMenu || `${fullpath[1]}/${fullpath[2]}` === 'perencanaan/daftar' || `${fullpath[1]}/${fullpath[2]}` === 'perencanaan/reguler' || `${fullpath[1]}/${fullpath[2]}` === 'perencanaan/insidental' || `${fullpath[1]}/${fullpath[2]}` === 'perencanaan/arsip' ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openPerencanaanMenu || `${fullpath[1]}/${fullpath[2]}` === 'perencanaan/daftar' || `${fullpath[1]}/${fullpath[2]}` === 'perencanaan/reguler' || `${fullpath[1]}/${fullpath[2]}` === 'perencanaan/insidental' || `${fullpath[1]}/${fullpath[2]}` === 'perencanaan/arsip'} timeout="auto" unmountOnExit>
                    <List component="div"
                        sx={{
                            '&& .Mui-selected, & .MuiListItemButton-root:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                            '.MuiListItemButton-root': {
                                paddingLeft: '12px',
                                paddingRight: '12px',
                            },
                            '& .Mui-selected:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                        }}>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/perencanaan/daftar" selected={`${fullpath[1]}/${fullpath[2]}` === 'perencanaan/daftar'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFileAddFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Daftar' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/perencanaan/reguler" selected={`${fullpath[1]}/${fullpath[2]}` === 'perencanaan/reguler'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFile3Fill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Reguler' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/perencanaan/insidental" selected={`${fullpath[1]}/${fullpath[2]}` === 'perencanaan/insidental'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFileLockFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Insidental' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/perencanaan/arsip" selected={`${fullpath[1]}/${fullpath[2]}` === 'perencanaan/arsip'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFoldersFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Arsip' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemButton onClick={handlePengawasanMenu} selected={currentLocation === 'pengawasan'}>
                        <ListItemIcon>
                            <RiFileChartFill className="ml-[2px]" />
                        </ListItemIcon>
                        <ListItemText primary='Pengawasan' hidden={sidebarCollapse} />
                        {!sidebarCollapse ? openPengawasanMenu || `${fullpath[1]}/${fullpath[2]}` === 'pengawasan/daftar' || `${fullpath[1]}/${fullpath[2]}` === 'pengawasan/agenda' || `${fullpath[1]}/${fullpath[2]}` === 'pengawasan/agenda-tim' || `${fullpath[1]}/${fullpath[2]}` === 'pengawasan/arsip' ? <ExpandLess /> : <ExpandMore /> : ''}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openPengawasanMenu || `${fullpath[1]}/${fullpath[2]}` === 'pengawasan/daftar' || `${fullpath[1]}/${fullpath[2]}` === 'pengawasan/agenda' || `${fullpath[1]}/${fullpath[2]}` === 'pengawasan/agenda-tim' || `${fullpath[1]}/${fullpath[2]}` === 'pengawasan/arsip'} timeout="auto" unmountOnExit>
                    <List component="div"
                        sx={{
                            '&& .Mui-selected, & .MuiListItemButton-root:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                            '.MuiListItemButton-root': {
                                paddingLeft: '12px',
                                paddingRight: '12px',
                            },
                            '& .Mui-selected:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                        }}>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/pengawasan/agenda" selected={`${fullpath[1]}/${fullpath[2]}` === 'pengawasan/agenda'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiCalendarFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Agenda' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-8'
                                component={NavLink} to="/pengawasan/agenda-tim" selected={`${fullpath[1]}/${fullpath[2]}` === 'pengawasan/agenda-tim'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiCalendar2Fill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Agenda TIM' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-8'
                                component={NavLink} to="/pengawasan/daftar" selected={`${fullpath[1]}/${fullpath[2]}` === 'pengawasan/daftar'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFileAddFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Daftar' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/pengawasan/arsip" selected={`${fullpath[1]}/${fullpath[2]}` === 'pengawasan/arsip'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFoldersFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Arsip' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemButton onClick={handlePascaPengawasanMenu} selected={currentLocation === 'pasca-pengawasan'}>
                        <ListItemIcon>
                            <RiFileHistoryFill className="ml-[2px]" />
                        </ListItemIcon>
                        <ListItemText primary='Pasca Pengawasan' hidden={sidebarCollapse} />
                        {!sidebarCollapse ? openPascaPengawasanMenu || `${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/daftar' || `${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/agenda' || `${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/agenda-tim' || `${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/arsip' ? <ExpandLess /> : <ExpandMore /> : ''}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openPascaPengawasanMenu || `${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/daftar' || `${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/agenda' || `${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/agenda-tim' || `${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/arsip'} timeout="auto" unmountOnExit>
                    <List component="div"
                        sx={{
                            '&& .Mui-selected, & .MuiListItemButton-root:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                            '.MuiListItemButton-root': {
                                paddingLeft: '12px',
                                paddingRight: '12px',
                            },
                            '& .Mui-selected:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                        }}>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/pasca-pengawasan/agenda" selected={`${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/agenda'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiCalendarFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Agenda' />
                            </ListItemButton>
                        </ListItem>
                        {/* <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/pasca-pengawasan/agenda-tim" selected={`${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/agenda-tim'}
                            >
                                <ListItemText primary='Agenda TIM' />
                            </ListItemButton>
                        </ListItem> */}
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/pasca-pengawasan/daftar" selected={`${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/daftar'}
                            >
                                {sidebarCollapse && <ListItemIcon>
                                    <RiFileAddFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Daftar' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/pasca-pengawasan/arsip" selected={`${fullpath[1]}/${fullpath[2]}` === 'pasca-pengawasan/arsip'}
                            >

                                {sidebarCollapse && <ListItemIcon>
                                    <RiFileWarningFill className="-ml-16" />
                                </ListItemIcon>}
                                <ListItemText primary='Sanksi' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem>
                    <ListItemButton
                        component={NavLink} to="/pengaturan"
                        selected={currentLocation === 'pengaturan'}
                    >
                        <ListItemIcon>
                            <Settings className="ml-[2px]" />
                        </ListItemIcon>
                        <ListItemText primary='Pengaturan' hidden={sidebarCollapse} />
                    </ListItemButton>
                </ListItem>
            </List>
            {/* <List
                sx={{
                    '&& .Mui-selected, & .MuiListItemButton-root:hover': {
                        bgcolor: '#3c7d21',
                        borderRadius: '0.375rem',
                        paddingLeft: '12px',
                        paddingRight: '12px',
                        '&, & .MuiListItemIcon-root': {
                            color: 'white',
                        },
                    },
                    '.MuiListItemButton-root': {
                        paddingLeft: '12px',
                        paddingRight: '12px',
                    },
                    '& .Mui-selected:hover': {
                        bgcolor: 'white',
                        borderRadius: '0.375rem',
                        '&, & .MuiListItemIcon-root': {
                            color: '#3c7d21',
                        },
                    },
                }}
                subheader={
                    <ListSubheader className='text-ellipsis overflow-hidden' component="div" id="nested-list-subheader">
                        Pengaturan
                    </ListSubheader>
                }>
                <ListItem hidden={auth.user_payload.role === 'participant'}>
                    <ListItemButton onClick={handleContactMenu} selected={currentLocation === 'cms'}>
                        <ListItemIcon>
                            <RiGlobalLine className="ml-[2px]" />
                        </ListItemIcon>
                        <ListItemText primary='CMS' hidden={sidebarCollapse} />
                        {!sidebarCollapse ? openContactMenu || `${fullpath[1]}/${fullpath[2]}` === 'cms/manajemen-web' || `${fullpath[1]}/${fullpath[2]}` === 'cms/manajemen-artikel' ? <ExpandLess /> : <ExpandMore /> : ''}
                    </ListItemButton>
                </ListItem>
                <Collapse in={openContactMenu || `${fullpath[1]}/${fullpath[2]}` === 'cms/manajemen-web' || `${fullpath[1]}/${fullpath[2]}` === 'cms/manajemen-artikel'} timeout="auto" unmountOnExit>
                    <List component="div"
                        sx={{
                            '&& .Mui-selected, & .MuiListItemButton-root:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                paddingLeft: '12px',
                                paddingRight: '12px',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                            '.MuiListItemButton-root': {
                                paddingLeft: '12px',
                                paddingRight: '12px',
                            },
                            '& .Mui-selected:hover': {
                                bgcolor: 'white',
                                borderRadius: '0.375rem',
                                '&, & .MuiListItemIcon-root': {
                                    color: '#3c7d21',
                                },
                            },
                        }}>
                        <ListItem hidden={auth.user_payload.role === 'participant'}>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/cms/manajemen-web" selected={`${fullpath[1]}/${fullpath[2]}` === 'cms/manajemen-web'}
                            >
                                <ListItemText primary='Manajemen Web' />
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton className='ml-16 -mt-4'
                                component={NavLink} to="/cms/manajemen-artikel" selected={`${fullpath[1]}/${fullpath[2]}` === 'cms/manajemen-artikel'}
                            >
                                <ListItemText primary='Manajemen Artikel' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Collapse>
            </List> */}
        </>
    );

    return (
        <>
            <Box sx={{ display: { sm: 'flex' } }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth + 40}px)` }
                    }}
                    className="bg-base-white shadow-none md:rounded-2xl transition-transform md:mr-5 md:mt-5"
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ ml: 'auto' }}>
                            <Grid2 container gap={2}>
                                {avatar
                                    ? <img src={avatar} className='font-semibold w-[48px] h-[48px] text-xl rounded-full' />
                                    : <Avatar sx={{ bgcolor: '#EBFFFD', color: '#3c7d21' }} className='font-semibold w-[48px] h-[48px] text-xl'>{name!.split(' ').map((val, index) => { if (index < 2) return val.charAt(0).toUpperCase() })}</Avatar>
                                }
                                <Button color="inherit" onClick={handleClickProfile} className='text-general-500'>{auth.user_payload.name ?? 'username'} <ArrowDropDownIcon /></Button>
                            </Grid2>
                        </Box>
                        <Menu
                            elevation={0}
                            className='mt-5'
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={openProfile}
                            onClose={handleCloseProfile}
                            onClick={handleCloseProfile}
                            transformOrigin={{ horizontal: "right", vertical: "top" }}
                            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                        >
                            <MenuItem className='w-[300px] px-4 py-5' >
                                <Grid2 container xs={12}>
                                    <Grid2 xs={3}>
                                        {avatar
                                            ? <Grid2 className="relative rounded-full h-[48px] w-[48px] overflow-hidden">
                                                <img
                                                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
                                                    src={avatar}
                                                />
                                            </Grid2>
                                            : <Avatar sx={{ bgcolor: '#EBFFFD', color: '#3c7d21' }} className='font-semibold w-[48px] h-[48px] text-xl'>{name!.split(' ').map((val, index) => { if (index < 2) return val.charAt(0).toUpperCase() })}</Avatar>
                                        }
                                    </Grid2>
                                    <Grid2 xs={9} className=''>
                                        <Typography className='text-primary-600 text-md'>{name}</Typography>
                                    </Grid2>
                                </Grid2>
                            </MenuItem>
                            {/* <MenuItem className='w-[300px] px-4 py-5' onClick={() => {
                                navigate('/dashboard')
                            }}>
                                <ListItemIcon>
                                    <RiHome5Line className='text-general-500' />
                                </ListItemIcon>
                                <ListItemText primary="Beranda" className="text-general-500" />
                            </MenuItem> */}
                            {/* <MenuItem className='w-[300px] px-4 py-5' onClick={() => {
                                navigate('/cek-hasil')
                            }}>
                                <ListItemIcon>
                                    <RiFileSearchLine className='text-general-500' />
                                </ListItemIcon>
                                <ListItemText primary="Cek Hasil Psikotes" className="text-general-500" />
                            </MenuItem> */}
                            <MenuItem className='w-[300px] px-4 py-5' onClick={() => {
                                navigate('/profil')
                            }}>
                                <ListItemIcon>
                                    <RiUserLine className='text-general-500' />
                                </ListItemIcon>
                                <ListItemText primary="Profil Saya" className="text-general-500" />
                            </MenuItem>
                            <MenuItem className='w-[300px] px-4 py-5' onClick={() => {
                                dispatch(logOut())
                                navigate('/')
                            }}>
                                <ListItemIcon>
                                    <RiLogoutCircleRLine className='text-danger-500' />
                                </ListItemIcon>
                                <ListItemText primary="Logout" className="text-danger-500" />
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 0 },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: 0 },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 2.5, pt: 13, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    {props.children}
                </Box>
            </Box >
        </>
    );
}

export default React.memo(Layout);