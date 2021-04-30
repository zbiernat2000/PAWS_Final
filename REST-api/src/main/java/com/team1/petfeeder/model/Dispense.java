package com.team1.petfeeder.model;

import lombok.Builder;

import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="dispense")
public class Dispense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "hour")
    private int hour;
    @Column(name = "minute")
    private int minute;
    //0 is monday 6 is sunday
    @Column(name="day")
    private int day;
    @Column(name="repeating")
    private boolean repeating;
    @Column(name="amount")
    private int amount;
}
