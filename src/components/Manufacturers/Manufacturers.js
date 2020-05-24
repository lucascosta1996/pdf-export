import React, { useState, useEffect } from 'react';
import * as FireStoreService from '../../services/firestore';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

function Manufacturers( {selectedManufacturer, changeManufacturer} ) {
  const [ manufacturersList, setManufacturersList ] = useState([]);

  useEffect( () => {
    FireStoreService.getManufacturers().then( (res) => {
      setManufacturersList( res )
    } )
  } )
  return (
    <FormControl>
      <InputLabel htmlFor="manufacturer">Manufacturer</InputLabel>
      <Select
        native
        value={ selectedManufacturer }
        onChange={ changeManufacturer }
        inputProps={{
          name: 'manufacturer-select',
          id: 'manufacturer',
        }}
      >
        <option aria-label="None" value="" />
        {
          manufacturersList.map( manufacturer => (
            <option value={manufacturer.name}>{manufacturer.name}</option>
          ) )
        }
      </Select>
    </FormControl>
  )
}

export default Manufacturers;
