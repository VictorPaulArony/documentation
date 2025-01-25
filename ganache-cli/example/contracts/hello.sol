// SPDX-License-Identifier: MIT
pragma solidity >= 0.4.17 <= 0.8.13;
contract HelloWorld{
                string public greeting;
                //functioin to set the gfreeting from the user
                function setGreeting (string memory _greeting) public {
                                greeting = _greeting;
                }
                //function to get the greeting and display it
                function getGreeting()public view returns (string memory){
                                return greeting;
                }
    }