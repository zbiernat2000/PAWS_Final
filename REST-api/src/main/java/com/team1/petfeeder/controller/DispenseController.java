package com.team1.petfeeder.controller;

import com.team1.petfeeder.exception.ResourceNotFoundException;
import com.team1.petfeeder.model.Dispense;
import com.team1.petfeeder.repository.DispenseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class DispenseController {

    @Autowired
    private DispenseRepository dispenseRepository;

    @GetMapping("/dispense")
    public List<Dispense> getAllDispenses(){
        return dispenseRepository.findAll();
    }

    @GetMapping("/dispense/{id}")
    public ResponseEntity<Dispense> getDispenseById(@PathVariable Long id){
        Dispense dispense = dispenseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Dispense not found with Id of " + id));
        return ResponseEntity.ok(dispense);
    }

    @PutMapping("/dispense/{id}")
    public ResponseEntity<Dispense> updateTask(@PathVariable Long id,@RequestBody Dispense dispenseDetails){
        Dispense dispense = dispenseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Dispense not found with Id of " + id));

        dispense.setHour(dispenseDetails.getHour());
        dispense.setMinute(dispenseDetails.getMinute());
        dispense.setRepeating(dispenseDetails.isRepeating());
        dispense.setDay(dispenseDetails.getDay());
        dispense.setAmount(dispenseDetails.getAmount());

        Dispense updateDispense = dispenseRepository.save(dispense);
        return ResponseEntity.ok(updateDispense);
    }

    @PostMapping("/dispense")
    public Dispense createDispense(@RequestBody Dispense dispense){
        return dispenseRepository.save(dispense);
    }

    @DeleteMapping("/dispense/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteTask(@PathVariable Long id){
        Dispense dispense = dispenseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task not found with Id of " + id));

        dispenseRepository.delete(dispense);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



}
