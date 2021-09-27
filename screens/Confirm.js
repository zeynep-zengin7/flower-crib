import React, {Component} from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

// for numbers
//const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



<LocalForm onSubmit={(values) => this.handlerSubmit(values)}>
                    <Row className="form-group">
                        <Col>
                        <Control.text model=".name"
                          name="name"
                          className="form-control"
                        placeholder="Enter your Name" 
                        validators={{
                            required, minLength: minLength(3), maxLength: maxLength(15)
                        }}
                       />
                       <Errors
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                            
                       />
                        </Col>
                    </Row><br></br>
                    <Row className="form-group">
                    <Col>
                        <Control.text model=".email" 
                        name="email"
                        className="form-control"
                        placeholder="Enter a valid email address" 
                        validators={{
                            required, validEmail
                        }}
                       />
                       <Errors
                            className="text-danger"
                            model=".email"
                            show="touched"
                            messages={{
                                required: 'Required',
                                validEmail: 'Invalid Email Address'
                            }}
                       />
                    </Col>
                    </Row><br></br>
                  
                    <Row className="form-group">
                        <Col>
                        <Control type="password" model=".password" 
                        name="password"
                        className="form-control"
                        placeholder="Enter your password" 
                        validators={{
                            required, 
                                passwordsMatch: (value) => vals.password === vals.conPassword,
                              
                        }}
                        
                       />
                       <Errors
                            className="text-danger"
                            model=".password"
                            show="touched"
                            messages={{
                                required: 'Required',
                                
                                passwordsMatch: 'Password doesnot match'
                            }}
                            
                    
                       />
                       
                        </Col>
                    </Row><br></br>
                    <Row className="form-group">
                        <Col>
                        <Control type="password" model=".conpassword" 
                        name="conpassword"
                        className="form-control"
                        placeholder="Please confirm your password" 
                        validators={{
                            required
                        }}
                       />
                       <Errors
                            className="text-danger"
                            model=".conpassword"
                            show="touched"
                            messages={{
                                required: 'Required',
                                
                                passwordsMatch: 'Password doesnot match'
                            }}
                            
                    
                       />
                        </Col>
                    </Row><br></br>
                    <Row className="form-group">
                        <Col>
                            <Checkbox name="agree" value={this.state.agree} onChange={this.handleAgree}
                            
                            > <strong>I accepts the terms and condition.</strong></Checkbox>
                            
                        </Col>
                        
                    </Row>
                    <Alert variant="info" >Note: Please agree our terms and condition to proceed forward.<br></br>
                            Thank you!</Alert>
                    <br></br>
                    <Button type="submit" className="rounded-pill bg-secondary" disabled={!(this.state.agree)}>Submit</Button>
                    </LocalForm>

