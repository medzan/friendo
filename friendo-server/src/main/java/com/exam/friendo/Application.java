package com.exam.friendo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;
import java.util.Comparator;

@SpringBootApplication
class Tree {
}

public class Test016 extends Tree {

	public static void main(String[] args) {
		new Test016().go();
	}

	void go() {
		go2(new Tree(), new Test016());
		go2((Test016) new Tree(), new Test016());
	}

	void go2(Tree t1, Test016 r1) {
		Test016 r2 = (Test016) t1;
		Tree t2 = (Tree) r1;
	}
}