---
published: true
title: Connecting the Dots
layout: post
---
Remember back to when you were a kid. At one point, someone handed you a mysterious pattern of dots and integers and explained that by drawing lines between these dots in a certain order you would end up with a picture.  Like a lot of kids at that age, I thought it was pretty darn cool; that you could turn a mess of numbers into a refined image - something that actually meant something.
For the past two months I’ve been connecting the dots, albeit at a much larger scale, here on the Data team at Bump as an Intern. In essence, what we do on the Data team isn’t all that different from that Connect the Dots book I played with as a child. Sure, we might trade in that book for a multi-terabyte server of log files and our crayon for a text editor but the essential elements remain the same. We use data to create understanding and stories that shape how Bump and its underlying technology evolve.

I’ve always loved building things, understanding how and why things worked. Out of the gate on Day 1 I realized that Bump is very much data driven. We use data daily to build and iterate extremely quickly. If we make a change to our app, within minutes of release on the app store we’re able to tell if a feature is popular, causing confusion, or broken.

*A World of Bump*

One of the (many) cool projects I’ve been working on is building interfaces for understanding the distribution of Bump users and how they use the app. We have millions of location data points that travels through our system on a weekly basis which I figured would make an interesting starting point to better understand our users and get my feet wet with our data.

There are dozens of ways to map geolocation data to a map with R, Fusion Tables, and Tableau just to name a few. I tested a few before settling on the Chrome Experiments WebGL Globe project for three reason: 1) It could handle 500,000+ location data points in the browser 2) It allowed dead simple mapping of distance in a visually interesting way 3) It was open source

 We use Redis for logging user events which then get pushed to log files.  We’re given the freedom to use whichever language makes us productive so for this task I turned to Python writing a parser for the log events that extracted location, distance of Bump (mapped to the magnitude), and platform information to a JSON file in the following format:

After all, it’s all about connecting those dots…