//package com.example.demo.tasks;
//
//import com.example.demo.model.ResignationDetails;
//import com.example.demo.repository.ResignationRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Component;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.client.RestTemplate;
//
//import org.springframework.context.annotation.Bean;
//
//
//import java.time.LocalDate;
//import java.util.List;
//
//@Component
//public class FlagUpdateTask {
//
//    @Autowired
//    private ResignationRepository resignationRepository;
//
//    @Autowired
//    private RestTemplate restTemplate;
//
//    // Define the RestTemplate bean
////    @Bean
////    public RestTemplate restTemplate() {
////        return new RestTemplate();
////    }
//
//    @Scheduled(cron = "0 * * * * *") // Run daily at midnight
//    @Transactional
//    public void updateFlags() {
//        LocalDate today = LocalDate.now();
//        List<ResignationDetails> employees = resignationRepository.findAll();
//
//        for (ResignationDetails employee : employees) {
////            if (employee.getLastWorkingDay() != null && employee.getLastWorkingDay().isBefore(today)) {
//            if (employee.getLastWorkingDay() != null && today.isEqual(employee.getLastWorkingDay()) && employee.getFlag() != 0) {
//                employee.setFlag(0);
//
//                String searchId = String.valueOf(employee.getEmpId());
////                String searchname = employee.getCurrentManager();
//
////                restTemplate.put("http://localhost:8082/employee-api/employees/" + employee.getEmpId() + "/updateFlag/0", null);
//                restTemplate.put("http://localhost:8082/employee-api/employees/" + searchId + "/updateFlag/0", null);
//
//                restTemplate.put("http://localhost:8080/auth/employees/" + searchId + "/updateFlag/0", null);
////                restTemplate.put("http://localhost:8080/auth/employees/55555/updateFlag/0", null);
//
//
//
//            }
////                else {
////                employee.setFlag(1);
////            }
//        }
//
//        resignationRepository.saveAll(employees);
//    }
//}
//
//
