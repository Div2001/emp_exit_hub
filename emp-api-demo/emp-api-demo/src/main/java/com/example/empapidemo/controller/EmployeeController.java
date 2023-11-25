package com.example.empapidemo.controller;


import com.example.empapidemo.model.Employee;
import com.example.empapidemo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/employee-api")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;
    @PostMapping("/employees")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
        try{
            Employee _employee = employeeRepository.save(new Employee(employee.getName(), employee.getEmpid(), employee.getJoindate(),
                    employee.getDept(), employee.getGender(), employee.getDob(), employee.getNationality(), employee.getMaritalstatus()));
            return new ResponseEntity<>(_employee, HttpStatus.CREATED);
        }
        catch(Exception ex){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        try{
            List<Employee> employees = new ArrayList<Employee>();
            employeeRepository.findAll().forEach(employees::add);
            if(employees.isEmpty()){
                return new ResponseEntity<>(null,HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(employees,HttpStatus.OK);
        }catch(Exception ex){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") int id){
        Optional<Employee> employeeData = employeeRepository.findById(id);
        if(employeeData.isPresent()){
            return new ResponseEntity<>(employeeData.get(),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") int id,@RequestBody Employee employee){
        Optional<Employee> employeeData = employeeRepository.findById(id);
        if(employeeData.isPresent()){
            Employee _employee = employeeData.get();
            _employee.setName(employee.getName());
            _employee.setEmpid(employee.getEmpid());
            _employee.setJoindate(employee.getJoindate());
            _employee.setDept(employee.getDept());
            _employee.setGender(employee.getGender());
            _employee.setDob(employee.getDob());
            _employee.setNationality(employee.getNationality());
            _employee.setMaritalstatus(employee.getMaritalstatus());

            //FLAG
//            _employee.setFlag(employee.getFlag());

            return new ResponseEntity<>(employeeRepository.save(_employee),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //FLAG

//    @PutMapping("/employees/{empid}/updateFlag/{flag}")
//    public ResponseEntity<Employee> updateEmployeeFlag(@PathVariable("empid") String empid, @PathVariable("flag") int flag) {
//        Employee employee = employeeRepository.findByEmpid(empid);
//
//        if (employee != null) {
//            employee.setFlag(0);
//            employeeRepository.save(employee);
//            return new ResponseEntity<>(employee, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Employee> deleteEmployeeById(@PathVariable("id") int id){
        try{
            employeeRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch(Exception ex){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }





}
