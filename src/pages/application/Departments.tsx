import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Departments = () => {
  const departments = [
    {
      "department": "customer_service",
      "sub_departments": [
        "support",
        "customer_success"
      ]
    },
    {
      "department": "design",
      "sub_departments": [
        "graphic_design",
        "product_design",
        "web_design"
      ]
    }
  ];

  const [expandedDepartment, setExpandedDepartment] = React.useState(0);
  const [selectedDepartments, setSelectedDepartments] = React.useState(new Set());

  const handleClick = (index:number) => {
    if (expandedDepartment === index) {
      // If the clicked department is already expanded, collapse it and clear the selected departments
      setExpandedDepartment(-1);
      setSelectedDepartments(new Set());
    } else {
      // If the clicked department is not expanded, expand it and select all of its sub-departments
      setExpandedDepartment(index);
      const subDepartments = departments[index].sub_departments;
      setSelectedDepartments(new Set(subDepartments));
    }
  };

  const handleSubDepartmentClick = (subDepartment:any) => {
    // Toggle the selection of a sub-department
    setSelectedDepartments((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(subDepartment)) {
        newSelected.delete(subDepartment);
      } else {
        newSelected.add(subDepartment);
      }
      return newSelected;
    });
  };

  return (
    <>
      <h1 className="text-gray-600 text-2xl text-center p-4">Find your departments</h1>
      <div className='w-1/2 mx-auto'>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Find your one
            </ListSubheader>
          }
        >
          {departments.map((department, index) => (
            <div key={department.department}>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox checked={expandedDepartment === index && selectedDepartments.size === department.sub_departments.length} />
                </ListItemIcon>
                <ListItemText primary={department.department} />
                {expandedDepartment === index ? <button onClick={() => handleClick(index)}><RemoveIcon /></button> : <button onClick={() => handleClick(index)}><AddIcon /></button>}
              </ListItemButton>
              <Collapse in={expandedDepartment === index} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {department.sub_departments.map((subDepartment) => (
                    <ListItemButton sx={{ pl: 4 }} key={subDepartment}>
                      <ListItemIcon>
                        <Checkbox
                          checked={selectedDepartments.has(subDepartment)}
                          onClick={() => handleSubDepartmentClick(subDepartment)}
                        />
                      </ListItemIcon>
                      <ListItemText primary={subDepartment} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </div>
          ))}
        </List>
      </div>
    </>
  );
};

export default Departments;
