---
title: fib.c
layout: page.html
tags: page
date: 2026-02-25
image: /img/fibScreen1.png
description: Blazing fast Fibonacci number finder in C, using the fast doubling method and GMP library. Calculates Fibonacci numbers with millions of digits in seconds.
---

# fib.c

**Last Updated: 25 Feb 2026**

<div class="article-image"><img
	src="/img/fibScreen1.png"
	alt="fib.c screenshot"
	loading="lazy"
	decoding="async"
/>
</div>


One of my most popular YouTube videos is my demonstration of a fast Fibonacci number finder in C. The code is available below. With clever programming (and with [GMP -- the GNU Multiple Precision Arithmetic Library](https://gmplib.org/), as well as refinements from others), this program can calculate,  *and print out,* Fibonacci numbers with millions of digits in fractions of a second. The algorithm is based on the fast doubling method, which allows us to compute Fibonacci numbers in logarithmic time. Ie: *O log n*.

The results speak for themselves. The *100 millionth* fibonacci number is calculated and printed to standard out in 1.46 seconds on my machine. 

This is a number with over **20 million digits**, and that if we pipe to a file yeilds us a twenty megabyte text file. 

If we search for the *five billionth* Fibonacci number, we get a number with over **1.04 billion digits**. It takes just 1 minute and 56 seconds to calculate and print this *almighty number*, and the resulting text file is over a full gigabyte in size.

Developed on Linux and cross-compiled to Windows and MS-DOS. 

## Video Demo

<div class="video-class"><iframe width="560" height="315" src="https://www.youtube.com/embed/cmshJmQ6o90?si=N2sMcDPmc9MibcPw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Source Code
<pre class="collapsed">
<code>
/*
Calculate Fibonacci Numbers
Originally written by Softwave 
https://s0ftwave.net/
https://github.com/Softwave
Additions by by Francesco146 
https://github.com/Francesco146 
and LizzyFleckenstein03 
https://github.com/LizzyFleckenstein03
Public Domain
https://creativecommons.org/publicdomain/zero/1.0/
*/

#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
#include &lt;ctype.h&gt;
#include &lt;gmp.h&gt;
#include &lt;time.h&gt;

int main(int argc, char *argv[])
{
    // Get User Input
    if (argc != 2) 
    {
        printf("usage: %s NUM\n", argv[0]);
        return EXIT_FAILURE;
    }

    long count = strtol(argv[1], NULL, 10);

    // Setup GMP
    mpz_t a, b, p, q;
    mpz_init_set_ui(a, 1);
    mpz_init_set_ui(b, 0);
    mpz_init_set_ui(p, 0);
    mpz_init_set_ui(q, 1);

    mpz_t tmp;
    mpz_init(tmp);

    // Start timing
    const clock_t start_time = clock();
    if (start_time == (clock_t) {-1}) 
    {
        fprintf(stderr, "Error start_time clock()\n");
        return EXIT_FAILURE;
    }



       while (count > 0) 
       {
        if (count % 2 == 0) 
        {
            mpz_mul(tmp, q, q);
            mpz_mul(q, q, p);
            mpz_mul_2exp(q, q, 1);
            mpz_add(q, q, tmp);

            mpz_mul(p, p, p);
            mpz_add(p, p, tmp);

            count /= 2;
        } 
        else 
        {
            mpz_mul(tmp, a, q);

            mpz_mul(a, a, p);
            mpz_addmul(a, b, q);
            mpz_add(a, a, tmp);

            mpz_mul(b, b, p);
            mpz_add(b, b, tmp);

            count -= 1;
        }
       }

    // End timing
    const clock_t end_time = clock();
    if (end_time == (clock_t) {-1})
    {
        fprintf(stderr, "Error end_time clock()\n");
        return EXIT_FAILURE;
    }


    // Print the results to standard out
       mpz_out_str(stdout, 10, b);
       printf("\n");

    // Cleanup
       mpz_clear(a);
       mpz_clear(b);
       mpz_clear(p);
       mpz_clear(q);
       mpz_clear(tmp);

    // Print time taken
    const double time_taken = ((double) (end_time - start_time)) / (double) CLOCKS_PER_SEC;
    if (printf("Calculation Time: %lf seconds\n", time_taken) < 0) return EXIT_FAILURE;
    if (fflush(stdout) == EOF) return EXIT_FAILURE;
    return EXIT_SUCCESS;
}

</code>
</pre>

To build:
`
gcc fib.c -o fib -lgmp -O3
`


## Download <img src="/img/gif/pink file icon.png" alt="file icon" class="inline-icon">

<a href="https://drive.google.com/file/d/1IzjnhfWSWtB2TNGVFIB55hGIjKF_B4gb/view?usp=sharing" class="button" target="_blank">Download Source</a>

<a href="https://drive.google.com/file/d/1YVCskDONpluc0Eu9EKAJKnMZdWTK94Dv/view?usp=drive_link" class="button" target="_blank">Download for MS-DOS</a>

<a href="https://drive.google.com/file/d/1Vr-EYO3pyyZrL3iWD0b7l3smiXphdK-K/view?usp=drive_link" class="button" target="_blank">Linux Binary </a>

<a href="https://drive.google.com/file/d/1l2ooZ8hRq6a-OFhQoAofvlRNSS4wOpGw/view?usp=drive_link" class="button" target="_blank">Windows Binary</a>


<style>
h2 {
    margin-bottom: 0em;
    margin-top: 0em;
}

.button {
    padding: 6px 10px;
}
</style>