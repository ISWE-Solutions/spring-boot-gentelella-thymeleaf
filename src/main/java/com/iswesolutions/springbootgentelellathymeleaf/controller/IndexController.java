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
public class IndexController {
    @GetMapping("/")
    public String index(){
        return "index1";
    }

    @GetMapping("/index1")
    public String index1(){
        return "index1";
    }

    @GetMapping("/index2")
    public String index2(){
        return "index2";
    }

    @GetMapping("/index3")
    public String index3(){
        return "index3";
    }
}
