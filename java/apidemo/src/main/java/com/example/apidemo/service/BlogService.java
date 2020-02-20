package com.example.apidemo.service;

import com.example.apidemo.entity.Blog;
import com.example.apidemo.repository.BlogMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogService {
    @Autowired
    BlogMapper mapper;

    public int add(Blog blog) {
        return mapper.add(blog);
    }

    public int modify(Blog blog) {
        return mapper.modify(blog);
    }

    public int remove(int id) {
        return mapper.remove(id);
    }

    public List<Blog> getBlogs() {
        return mapper.getBlogs();
    }

    public Blog getBlog(int id) {
        return mapper.getBlog(id);
    }
}
