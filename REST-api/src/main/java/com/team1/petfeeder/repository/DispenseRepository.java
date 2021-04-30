package com.team1.petfeeder.repository;

import com.team1.petfeeder.model.Dispense;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DispenseRepository extends JpaRepository<Dispense, Long> {
}
