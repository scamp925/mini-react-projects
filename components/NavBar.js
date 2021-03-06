/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>Mini React Projects</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link passHref href="/calculator">
              <Nav.Link>Calculator</Nav.Link>
            </Link>
            <Link passHref href="/TicTacToe">
              <Nav.Link>Tic Tac Toe</Nav.Link>
            </Link>
            <Link passHref href="/bingo">
              <Nav.Link>Bingo Game</Nav.Link>
            </Link>
            <Link passHref href="/todoList">
              <Nav.Link>Todo List</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
