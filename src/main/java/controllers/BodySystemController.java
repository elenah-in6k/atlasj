package controllers;

import core.entity.BodySystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import responses.BodySystemResponse;
import services.BodySystemService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

/**
 * Created by gaial on 10.05.2016.
 */
@Controller
public class BodySystemController {
    @Autowired
    BodySystemService bodySystemService;

    String message = "Welcome to SuperGreatAppForDIPLOMA!";

    @RequestMapping("/body-systems2")
    public ModelAndView showMessage(
            @RequestParam(value = "name", required = false, defaultValue = "World") String name) {
        System.out.println("in controller");

        ModelAndView mv = new ModelAndView("helloworld");
        mv.addObject("message", message);
        mv.addObject("name", name);
        return mv;
    }

    @RequestMapping("/body-systems1")
    public ModelAndView getAll(){
        ModelAndView mv = new ModelAndView("bodySystems");
        List<BodySystem> all = bodySystemService.getAll();
        mv.addObject("list", all);

        return mv;
//        BodySystem bodySystem = all.get(0);
//
//        BodySystemResponse body = new BodySystemResponse(bodySystem);
////        ResponseEntity<BodySystemResponse> bodySystemResponseEntity = ResponseEntity.ok(body);
//
//        return body;
    }

    @RequestMapping("/body-systems")
    public String gettAll(){
       List<BodySystem> all = bodySystemService.getAll();

       return "sasha";
    }
}
