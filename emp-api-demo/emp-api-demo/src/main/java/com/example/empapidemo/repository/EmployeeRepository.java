package com.example.empapidemo.repository;


import com.example.empapidemo.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    //FLAG
//    Employee findByEmpid(String empid);

}
