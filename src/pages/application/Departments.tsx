import React, { useState, useEffect } from 'react';
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
      department: 'customer_service',
      sub_departments: ['support', 'customer_success'],
    },
    {
      department: 'design',
      sub_departments: ['graphic_design', 'product_design', 'web_design'],
    },
  ];

  const [expandedDepartment, setExpandedDepartment] = useState(-1);
  const [selectedDepartments, setSelectedDepartments] = useState(new Set());

  const isAllSubDepartmentsSelected = (departmentIndex) => {
    const subDepartments = departments[departmentIndex].sub_departments;
    return subDepartments.every((subDepartment) => selectedDepartments.has(subDepartment));
  };

  useEffect(() => {
    // Check if all sub-departments of a department are selected and update the parent checkbox
    departments.forEach((dept, index) => {
      const parentCheckbox = document.getElementById(`parent-checkbox-${index}`);
      if (parentCheckbox) {
        parentCheckbox.checked = isAllSubDepartmentsSelected(index);
        parentCheckbox.indeterminate =
          selectedDepartments.size > 0 && !isAllSubDepartmentsSelected(index) && selectedDepartments.has(dept.department);
      }
    });
  }, [selectedDepartments, departments]);

  const handleExpand = (index) => {
    setExpandedDepartment((prevExpanded) => (prevExpanded === index ? -1 : index));
  };

  const handleParentCheckboxClick = (event, index) => {
    // Prevent the event from propagating to the parent ListItemButton
    event.stopPropagation();

    const subDepartments = departments[index].sub_departments;
    setSelectedDepartments((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (isAllSubDepartmentsSelected(index)) {
        // Unselect all sub-departments if all are selected
        subDepartments.forEach((subDepartment) => newSelected.delete(subDepartment));
      } else {
        // Select all sub-departments if any or none are selected
        subDepartments.forEach((subDepartment) => newSelected.add(subDepartment));
      }
      return newSelected;
    });

    // Manually expand the department when the parent checkbox is clicked
    if (!expandedDepartment || expandedDepartment !== index) {
      setExpandedDepartment(index);
    }
  };

  const handleSubDepartmentClick = (subDepartment) => {
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
      <div className="w-1/2 mx-auto">
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
                  <Checkbox
                    id={`parent-checkbox-${index}`}
                    checked={isAllSubDepartmentsSelected(index)}
                    onClick={(event) => handleParentCheckboxClick(event, index)}
                  />
                </ListItemIcon>
                <ListItemText primary={department.department} />
                {expandedDepartment === index ? (
                  <button onClick={() => handleExpand(index)}>
                    <RemoveIcon />
                  </button>
                ) : (
                  <button onClick={() => handleExpand(index)}>
                    <AddIcon />
                  </button>
                )}
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
