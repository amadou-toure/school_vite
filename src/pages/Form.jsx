import Style from './styles/Form.module.css'
import { Card,Grid,Typography,Button,CardContent, TextField } from '@mui/material'
import { useState } from 'react';




const Form = ()=>{
    // const createStudent=()=> {
    //     return fetch("localhost:5000/api/students/", {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             name: nom,
    //             surname: surname,
    //             class: classe,
    //             matricule: matricule,
    //             number: number


    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }).then(response => {
    //         if (response.status >= 200 && response.status < 300) {
    //             return response;
    //             console.log(response);
    //             window.location.reload();
    //           } else {
    //            console.log('Somthing happened wrong');
    //           }
    //     }).catch(err => err);
    //     }
    const [nom, setNom] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [matricule, setMatricule] = useState("");
    const [classe, setClasse] = useState("");
    const handleChange=(e)=>{
        (e) => setEmail(e.target.value)
    }
    const formElements=[
        {
            name:{nom},placeholder:"Entrer le nom de l'etudiant",label:"Nom",variant:"outlined",fullWidth:true,required:true,xs:6,sm:6 },
        {
            name:{surname},placeholder:"Entrer le prenom de l'etudiant",label:"Prenom",variant:"outlined",fullWidth:true,required:true,xs:6,sm:6
        },
        {
            name:{classe},placeholder:"Entrer la classe de l'etudiant",label:"Classe",variant:"outlined",fullWidth:true,required:true,xs:6,sm:6
        },
        {
            name:{matricule},placeholder:"Entrer le matricule de l'etudiant",label:"Matricule",variant:"outlined",fullWidth:true,required:true,xs:6,sm:6
        },
        {
            name:{number},placeholder:"Entrer le numro de telephone de l'etudiant",label:"Numero",variant:"outlined",fullWidth:true,required:true,xs:12,sm:6
        },
        
    ]
    return(
        <>
        <div className={Style.form}>
            <Grid className={Style.grid}>
                <Card className={Style.card}>
                    <CardContent>
                        <Typography variant='h4' color='primary' className={Style.formTitle}>
                            Ajouter un nouvel etudiant
                        </Typography>
                        <br />
                        <Typography variant='subtitle1' color='textSecondary' className={Style.formTitle}>
                            Entrer toutes les informations demandees:
                        </Typography>
                        <br />
                        <form >
                            <Grid container spacing={2}>
                                {
                                    formElements.map(input=> 
                                    <Grid item xs={input.xs} >
                                        <TextField {...input} />
                                    </Grid>)
                                }
                            </Grid>
                            <br />
                            <Grid item xs={12} className={Style.buttonGrid}>
                                <Button spacing={1} type='submit' variant='contained' color='primary' >Valider</Button>
                                <Button  spacing={1} variant='outlined' color='primary' >Reinitialiser</Button>
                            </Grid>
                            
                        </form>
                    </CardContent>
                    {nom}
                </Card>
            </Grid>
        </div>
        </>
    )
}

export default(Form)