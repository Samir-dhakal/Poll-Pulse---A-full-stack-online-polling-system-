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

package com.tillu.pollpulse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/polls")
public class PollController {

    // This is a placeholder for a real Poll object.
    // We're creating a simple class here just to return data.
    private static class DummyPoll {
        public Long id;
        public String title;

        public DummyPoll(Long id, String title) {
            this.id = id;
            this.title = title;
        }
    }

    @GetMapping
    public List<DummyPoll> getAllPolls() {
        // This is a hardcoded list of polls to test your endpoint.
        // We will replace this with a database call later.
        List<DummyPoll> polls = new ArrayList<>();
        polls.add(new DummyPoll(1L, "What is your favorite programming language?"));
        polls.add(new DummyPoll(2L, "What is the best IDE?"));
        return polls;
    }
}
