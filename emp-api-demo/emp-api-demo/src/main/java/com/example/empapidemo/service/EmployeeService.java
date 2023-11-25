package com.example.empapidemo.service;

import com.example.empapidemo.model.Employee;
import com.example.empapidemo.repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    private EmployeeRepository employeeRepository;

    public Employee saveEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

//    public List<Employee> saveEmployees(List<Employee> employees){
//        return employeeRepository.saveAll(employees);
//    }

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(int id){
        Optional<Employee> employeeData = employeeRepository.findById(id);
        return employeeData;
    }

    public Employee updateEmployeeById(Employee employee){
        return employeeRepository.save(employee);

    }

}
