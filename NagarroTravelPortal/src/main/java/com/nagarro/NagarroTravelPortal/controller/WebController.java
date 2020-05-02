package com.nagarro.NagarroTravelPortal.controller;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.nagarro.NagarroTravelPortal.entity.Ticket;
import com.nagarro.NagarroTravelPortal.entity.User;
@RestController
@SessionAttributes("user")
public class WebController
{
	
	@Autowired
	private EmailService emailService;
	
	 
	private SessionFactory sessionFactory;

	 
		@Autowired
	    public void SomeService(EntityManagerFactory factory) {
	      if(factory.unwrap(SessionFactory.class) == null){
	        throw new NullPointerException("factory is not a hibernate factory");
	      }
	      this.sessionFactory = factory.unwrap(SessionFactory.class);
	    }
	    
	@PostMapping("/forgotpassword")
	public String ForgotPassword(@RequestParam(name = "email", required = true) String email)
	{
//		 emailService.sendMail(email, "Hi", "Aaloo");
         
//	     emailService.sendPreConfiguredMail("Ho ho ho");
	     
		 return "";
	}
	
	@PostMapping("/signup")
	public User signup(@RequestParam(name = "fname", required = true) String fname,
			@RequestParam(name = "lname", required = true) String lname,
			@RequestParam(name = "bunit", required = true) String bunit,
			@RequestParam(name = "title", required = true) String title,
			@RequestParam(name = "email", required = true) String email,
			@RequestParam(name = "address1", required = true) String address1,
			@RequestParam(name = "address2", required = false) String address2,
			@RequestParam(name = "city", required = true) String city,
			@RequestParam(name = "state", required = true) String state,
			@RequestParam(name = "zip", required = true) String zip,
			@RequestParam(name = "country", required = true) String country,
			@RequestParam(name = "password", required = true) String password,
			Model model,@ModelAttribute("user") User user)
    {
		user.setFname(fname);
		user.setLname(lname);
		user.setBunit(bunit);
		user.setTitle(title);
		user.setEmail(email);
		user.setAddress1(address1);
		user.setAddress2(address2);
		user.setCity(city);
		user.setState(state);
		user.setZip(Integer.parseInt(zip));
		user.setCountry(country);
		user.setPassword(password);
		
		Session session = getSession();
		session.save(user);
		System.out.println(user);
		return user;
	}
	
	private Session getSession() {
		// TODO Auto-generated method stub
		return sessionFactory.openSession();
	}

	@PostMapping("/ticketgeneration")
	public Ticket ticketGeneration(@RequestParam(name = "type", required = true) String type,
			@RequestParam(name = "tcity", required = true) String tcity,
			@RequestParam(name = "lcity", required = true) String lcity,
			@RequestParam(name = "sdate", required = true) String sdate,
			@RequestParam(name = "edate", required = true) String edate,
			@RequestParam(name = "pnumber", required = true) String pnumber,
			@RequestParam(name = "pname", required = true) String pname,
			@RequestParam(name = "exborne", required = true) String exborne,
			@RequestParam(name = "approver", required = false) String approver,
			@RequestParam(name = "duration", required = false) String duration,
			@RequestParam(name = "upbound", required = false) String upbound,
			@RequestParam(name = "details", required = true) String details,
			Model model,@ModelAttribute("user") User user) 
    {
		Ticket ticket=new Ticket();
		ticket.setTcity(tcity);
		ticket.setType(type);
		ticket.setLcity(lcity);
		ticket.setSdate(sdate);
		ticket.setEdate(edate);
		ticket.setPname(pname);
		ticket.setPnumber(pnumber);
		ticket.setExborne(exborne);
		ticket.setApprover(approver);
		ticket.setDuration(duration);
		ticket.setUpbound(Integer.parseInt(upbound));
		ticket.setDetails(details);
		ticket.setEmail(user.getEmail());
		return ticket;
	}
	
	@GetMapping("/signup")
	public String signup() 
	{
		return "";
	}
	
	@PostMapping("/signin")
	public String signin(@RequestParam(name = "username", required = false) String username,
			@RequestParam(name = "password", required = false) String password, Model model,@ModelAttribute("user") User user)
	{
		return "";
	}
	
	@ModelAttribute("user")
    public User user() 
	{
        return new User();
	}
}
