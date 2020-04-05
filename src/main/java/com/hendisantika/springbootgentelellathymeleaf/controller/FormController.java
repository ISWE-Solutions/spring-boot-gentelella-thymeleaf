package com.hendisantika.springbootgentelellathymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by IntelliJ IDEA.
 * Project : spring-boot-gentelella-thymeleaf
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 10/09/18
 * Time: 06.13
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
