import { Facebook, Github, GithubIcon, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background px-4 mx-auto py-10 sm:px-6 lg:px-10">
      <div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-bold">MyApp</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Building modern web experiences with Next.js & shadcn/ui.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank">
                <Facebook className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <Twitter className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Instagram className="h-5 w-5 hover:text-primary" />
              </Link>
              <Link href="https://github.com" target="_blank">
                <GithubIcon className="h-5 w-5 hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
