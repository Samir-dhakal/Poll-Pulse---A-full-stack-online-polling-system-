// src/main/java/com/tillu/pollpulse/controller/PollController.java

package com.tillu.pollpulse.controller;

import com.tillu.pollpulse.model.Poll;
import com.tillu.pollpulse.model.Option;
import com.tillu.pollpulse.repository.PollRepository;
import com.tillu.pollpulse.repository.OptionRepository;
import com.tillu.pollpulse.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/polls")
public class PollController {

    @Autowired
    private PollRepository pollRepository;

    @Autowired
    private OptionRepository optionRepository;

    // We will not use the VoteRepository for now, to keep it simple.
    // @Autowired
    // private VoteRepository voteRepository;

    @GetMapping
    public List<Poll> getAllPolls() {
        return pollRepository.findAll();
    }

    @PostMapping
    public Poll createPoll(@RequestBody Poll poll) {
        return pollRepository.save(poll);
    }

    @PostMapping("/{pollId}/vote/{optionId}")
    public ResponseEntity<?> castVote(@PathVariable Long pollId, @PathVariable Long optionId) {
        Optional<Option> optionalOption = optionRepository.findById(optionId);

        if (optionalOption.isPresent()) {
            Option option = optionalOption.get();

            // Increment the vote count and save the option.
            // This is a simplified version of the logic to get you to a working state.
            option.setVoteCount(option.getVoteCount() + 1);
            optionRepository.save(option);

            return ResponseEntity.ok(option);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Option not found with id: " + optionId);
        }
    }
}
