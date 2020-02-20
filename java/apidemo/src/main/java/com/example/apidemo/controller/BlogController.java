package com.example.apidemo.controller;

import com.example.apidemo.entity.Blog;
import com.example.apidemo.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@RestController
@RequestMapping("/api")
public class BlogController {

    @Autowired
    BlogService service;

//    @PostMapping(value = "blogs")
//    public Map<String, Object> add(@RequestParam(value = "category") String category,
//                                   @RequestParam(value = "title") String title,
//                                   @RequestParam(value = "author", defaultValue = "user1") String author,
//                                   @RequestParam(value = "contents") String contents,
//                                   @RequestParam(value = "link", defaultValue = "") String link,
//                                   @RequestParam(value = "is_private", defaultValue = "1") int is_private) {
//        Map<String, Object> result = new HashMap<>();
//
//        Blog blog = new Blog(category, title, author, contents, link, is_private);
//        result.put("result", service.add(blog));
//
//        return result;
//    }

    @PostMapping(value = "blogs")
    public Map<String, Object> add(@RequestBody Blog blog) {
        Map<String, Object> result = new HashMap<>();

//        Blog blog = new Blog(category, title, author, contents, link, is_private);
        result.put("result", service.add(blog));

        return result;
    }

    @PutMapping(value = "blogs")
    public Map<String, Object> modify(@RequestParam(value = "id") int id,
                                      @RequestParam(value = "category") String category,
                                      @RequestParam(value = "title") String title,
                                      @RequestParam(value = "author") String author,
                                      @RequestParam(value = "contents") String contents,
                                      @RequestParam(value = "link", defaultValue = "") String link,
                                      @RequestParam(value = "is_private", defaultValue = "1") int is_private) {
        Map<String, Object> result = new HashMap<>();

        Blog blog = new Blog(id, contents, title, author, contents, link, is_private);
        result.put("result", service.modify(blog));

        return result;
    }

    @DeleteMapping(value = "blogs/{id}")
    public Map<String, Object> remove(@PathVariable(value = "id") int id) {
        Map<String, Object> result = new HashMap<>();

        result.put("result", service.remove(id));
        return result;
    }

    @GetMapping(value = "blogs")
    public Map<String, Object> list() {
        Map<String, Object> result = new HashMap<>();
        List<Blog> blogs = service.getBlogs();
        result.put("result", "1");
        result.put("blogs", blogs);

        return result;
    }

    @GetMapping(value = "blogs/{id}")
    public Map<String, Object> get(@PathVariable(value = "id") int id) {
        Map<String, Object> result = new HashMap<>();
        Blog blog = service.getBlog(id);
        result.put("result", "1");
        result.put("blog", blog);

        return result;
    }
}