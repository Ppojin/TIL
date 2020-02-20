package com.example.apidemo.repository;

import com.example.apidemo.entity.Blog;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BlogMapper {

    int add(Blog blog);

    int modify(Blog blog);

    int remove(int id);

    List<Blog> getBlogs();

    Blog getBlog(int id);
}
