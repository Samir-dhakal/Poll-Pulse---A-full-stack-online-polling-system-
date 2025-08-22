// package com.tillu.pollpulse;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Controller;
// import org.springframework.web.bind.annotation.RequestMapping;

// @Controller
// public class PollController {
//     @Value("${spring.application.name}")
//     private String appName;

//     @RequestMapping
//     public String index() {
//         System.out.println(appName);

//         return "Index.html";
//     }

//     // public static String viewName() {
//     // return "Index.html";
//     // }

// }

// new
// src/main/java/com/tillu/pollpulse/controller/PollController.java

// src/main/java/com/tillu/pollpulse/controller/PollController.java

package com.tillu.pollpulse;

import com.tillu.pollpulse.model.Poll;
import com.tillu.pollpulse.repository.PollRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/polls")
public class PollController {

    // This is the magical crane. Spring will automatically create an instance of it
    // for us.
    @Autowired
    private PollRepository pollRepository;

    @GetMapping
    public List<Poll> getAllPolls() {
        // This method will now fetch all polls from the database.
        // It will return an empty list until you add some polls.
        return pollRepository.findAll();
    }

    @PostMapping
    public Poll createPoll(@RequestBody Poll poll) {
        // This method saves a new poll object that comes in from the request body.
        return pollRepository.save(poll);
    }
}
