package com.example.apidemo.entity;

import lombok.Data;
import org.apache.ibatis.type.Alias;

@Data
@Alias("blog")
public class Blog {
    private int id;
    private String category;
    private String title;
    private String author;
    private String contents;
    private String link;
    private int is_private;
    private String cdate;

    public Blog(int id, String category, String title, String author, String contents, String link, int is_private) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.author = author;
        this.contents = contents;
        this.link = link;
        this.is_private = is_private;
    }

    public Blog(String category, String title, String author, String contents, String link, int is_private) {
        this(0, category, title, author, contents, link, is_private);
    }

    public Blog() {}
}

