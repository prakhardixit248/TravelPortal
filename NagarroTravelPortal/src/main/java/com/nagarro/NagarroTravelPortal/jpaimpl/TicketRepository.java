package com.nagarro.NagarroTravelPortal.jpaimpl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nagarro.NagarroTravelPortal.entity.Ticket;
@CrossOrigin(origins = "*", allowedHeaders = "*",maxAge = 1800)
public interface TicketRepository extends JpaRepository<Ticket, Long>
{

}
