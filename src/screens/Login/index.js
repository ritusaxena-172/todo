import React,{useEffect} from 'react';
import Notes from './notes'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import { useStyles } from './styles';
function NotesApp() {
const [list,setList]=React.useState([]);
const [task,setTask]=React.useState('');
const [checked,setChecked]=React.useState(false);
const [click,setClick]=React.useState(0);
const [component,setComponent]=React.useState([]);
const classes = useStyles();

// useEffect(() => {
//     var temp=[];
//   if(task!=null){
//      temp.push(task)
//   }
//   setList(temp);
// }, [list])

useEffect(() => {
    console.log('list is',list)
    console.log('click is',click)
    }, [list,component]);

const handleChange = (event) => {
       setChecked(event.target.checked)
      };

const RenderView=()=>{
    return(
        <ul>{list.map(note =>
            <li >{note}</li>
          )}</ul>
    );
}

const ButtonClick=()=> {
    setComponent([...component, <CheckList/>]);
     
    setClick(click=>click+1)
    // console.log('component is',click)
  }

const AddData= async ()=>{
    setList([...list, task]);
    console.log('added item is',task)
    console.log('list is',list)
}

function CheckList(){
    console.log('clicked')
   return(
    <FormControlLabel
        control={<Checkbox checked={checked} onChange={handleChange} name="gilad" />}
        label="Add"/>
    );
}
    return ( 
      <div>
    <div>
    <TextField
          id="standard-password-input"
          label="Add Text"
          type="text"
          autoComplete="current-password"
          value={task}
          onChange={(event)=>setTask(event.target.value)}
        />
<Button variant="contained" color="primary" component="span" onClick={()=>AddData()}>
         Add to the list
        </Button>
        <Button style={{marginLeft:'20px'}} variant="contained" color="primary" component="span" onClick={()=>ButtonClick()}>
         Add CheckList
        </Button>
        {/* <AccessAlarmIcon   className={clsx(classes.icon)} color="primary" onClick={CheckList} /> */}
        
    </div>
    <div>
       <RenderView/>
       {click!=0?
       component.map(function(component, index) 
              {
                  return  component;
              })
              :null}
    </div>
      </div>
      );
}


    export default NotesApp;

