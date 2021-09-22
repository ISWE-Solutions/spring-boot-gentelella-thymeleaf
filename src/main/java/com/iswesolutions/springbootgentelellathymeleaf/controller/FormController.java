package com.iswesolutions.springbootgentelellathymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by IntelliJ IDEA.
 * Project : spring-boot-gentelella-thymeleaf
 * Email: csiwale@iswesolutions.com
 * Date: 20/09/2021
 * To change this template use File | Settings | File Templates.
 */

@Controller
public class FormController {
    @GetMapping("/form")
    public String form() {
        return "form";
    }

    @GetMapping("/form_advanced")
    public String formAdvanced() {
        return "form_advanced";
    }
}
