package com.test.album.sampletest.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.test.album.sampletest.module.PictureInfo;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({ "/api" })
public class SampleController {

	@RequestMapping(path = "/searchPicturelist", method = RequestMethod.GET)
	@ResponseBody
	ResponseEntity<?> search() {
		List<PictureInfo> pictureList = new ArrayList<PictureInfo>();

		Date sysdate = new Date();
		pictureList.add(new PictureInfo(1, sysdate, "name 1", "https://unsplash.it/500?image=12"));
		pictureList.add(new PictureInfo(2, sysdate, "name 2", "https://unsplash.it/500?image=13"));

		return new ResponseEntity<List<PictureInfo>>(pictureList, HttpStatus.OK);
	}

	

}
