import { Alert, Box, Button, Chip, Dialog, DialogContent, DialogContentText, IconButton, Snackbar, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { RiAddLine, RiArrowDownSLine, RiArrowUpSLine, RiDeleteBin7Line, RiEditLine, RiEyeLine, RiListUnordered } from '@remixicon/react';
import {
    type MRT_ColumnDef,
} from 'material-react-table';
import moment from 'moment';
import { Dispatch, SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../../components/Layout';
import { snackbarType } from '../../../../interfaces/snackbar.interface';
import Table from '../../../../components/organism/Table';

function PengawasanArsip() {
    const navigate = useNavigate();
    const [openFilter, setOpenFilter] = useState<boolean>(false)
    const filterExclude = ['aksi']
    const data = [
        {
            tanggal: "01 Oktober 2024",
            jenis: "Insidental",
            nama: "PT ABC",
            alamat: "Bekasi",
            tanggal_surat: "01 Oktober 2024",
            nomor_sp: "102/GAK/VII/2024",
            dibuat: "Asti",
            status: "Draft"
        },
        {
            tanggal: "02 Oktober 2024",
            jenis: "Reguler",
            nama: "PT HIJ",
            alamat: "Kota Bekasi",
            tanggal_surat: "02 Oktober 2024",
            nomor_sp: "102/GAK/VII/2024",
            dibuat: "Meika",
            status: "Lengkap"
        }
    ]

    const columns: MRT_ColumnDef<any>[] = [
        {
            accessorKey: 'id',
            header: 'ID',
            Cell: ({ row }) => row.index + 1,
        },
        {
            accessorKey: "tanggal",
            header: 'Tanggal Registrasi',
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            filterFn: 'equals',
            filterVariant: 'select',
            muiFilterTextFieldProps: {
                variant: 'outlined',
            }
        },
        {
            accessorKey: "jenis",
            header: 'Jenis',
            enableClickToCopy: true,
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            filterFn: 'fuzzy',
            filterVariant: 'select',
            muiFilterTextFieldProps: {
                variant: 'outlined',
            }
        },
        {
            accessorKey: "nama",
            header: 'Nama Usaha dan / atau Kegiatan',
            enableClickToCopy: true,
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            filterFn: 'fuzzy',
            filterVariant: 'select',
            muiFilterTextFieldProps: {
                variant: 'outlined',
            }
        },
        {
            accessorKey: "alamat",
            header: 'Alamat Lengkap',
            enableClickToCopy: true,
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            filterFn: 'fuzzy',
            filterVariant: 'select',
            muiFilterTextFieldProps: {
                variant: 'outlined',
            }
        },
        {
            accessorKey: "tanggal_surat",
            header: 'Tanggal Surat',
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            filterFn: 'equals',
            filterVariant: 'select',
            muiFilterTextFieldProps: {
                variant: 'outlined',
            }
        },
        {
            accessorKey: "nomor_sp",
            header: 'No. SP',
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            filterFn: 'equals',
            filterVariant: 'select',
            muiFilterTextFieldProps: {
                variant: 'outlined',
            }
        },
        {
            accessorKey: "dibuat",
            header: 'PIC',
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            filterFn: 'equals',
            filterVariant: 'select',
            muiFilterTextFieldProps: {
                variant: 'outlined',
            }
        },
        {
            accessorKey: "status",
            header: 'Status',
            enableClickToCopy: true,
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            filterFn: 'fuzzy',
            filterVariant: 'select',
            muiFilterTextFieldProps: {
                variant: 'outlined',
            }
        },
        {
            accessorKey: "aksi",
            header: 'Aksi',
            muiTableHeadCellProps: {
                align: 'left',
            },
            muiTableBodyCellProps: {
                align: "left",
            },
            size: 50,
            Cell: ({ row }) => {
                return <IconButton className="border-solid border-2 text-primary-600" aria-label="confirm">
                    <RiEyeLine />
                </IconButton>
            },
            enableColumnFilter: false,
        },
    ];

    return (
        <Layout>
            <Grid2 container justifyContent={'space-between'}>
                <Grid2 container alignContent={'center'}>
                    <Typography className="text-3xl font-semibold text-base-dark mt-[-2px] md:mt-0 md:text-4xl">
                        Pengawasan &gt; Arsip
                    </Typography>
                </Grid2>
                <Grid2 container gap={2} className='w-full md:w-auto'>
                    <Button className="w-full mt-4 bg-primary-600 text-base-white rounded-lg py-4 px-6 hover:bg-primary-600 md:mt-0 md:w-auto gap-2" onClick={() => navigate('/register/daftar/tambah')}><RiAddLine /> Tambah</Button>
                </Grid2>
            </Grid2>
            <Grid2 container className="hidden md:block" marginTop={4}>
                <Box sx={{
                    "& .MuiBox-root": {
                        boxShadow: "0",
                    },
                    "& .MuiPaper-root": {
                        paddingLeft: '24px',
                        paddingRight: '24px',
                        paddingTop: '14px',
                    },
                    bgcolor: 'white'
                }}>
                    <Stack sx={{ margin: '24px' }}>
                        <Table openFilter={openFilter} setOpenFilter={setOpenFilter} columns={columns} data={data ?? []} filterExclude={filterExclude}></Table>
                    </Stack>
                </Box>
            </Grid2>
        </Layout>
    );
};

export default PengawasanArsip;
