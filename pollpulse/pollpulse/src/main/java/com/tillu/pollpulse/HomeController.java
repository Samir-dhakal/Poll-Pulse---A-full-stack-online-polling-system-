package com.tillu.pollpulse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping
    public String index() {
        return "Index.html";
    }

    public static String viewName() {
        return "Index.html";
    }

}
