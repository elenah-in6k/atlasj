package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import services.BodySystemService;

/**
 * Created by gaial on 10.05.2016.
 */
@Controller
public class BodySystemController {
    @Autowired
    BodySystemService bodySystemService;

    @RequestMapping("/illnesses")
    public ModelAndView getAll(){
        ModelAndView mv = new ModelAndView("illnesses");
        mv.addObject("list", bodySystemService.getAll());

        return mv;
    }
}
