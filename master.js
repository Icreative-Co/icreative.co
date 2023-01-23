let nameUser
let commandHeader
let commandBox

document.getElementById('enterButton').addEventListener('keyup', () => {
	if (event.keyCode === 13) {
	    document.getElementById('enterButton').disabled = true
		// event.preventDefault();
		let parent = document.querySelectorAll('#parent')
		document.querySelector('.animation').style.display = 'block'
		let counter = 1
		for(let i = 0 ; i < parent.length ; i++ ){
			parent[i].style.animation = 'animated-text 1s steps(40,end) 10s 1 normal both'
			parent[i].style.animationDelay = counter+ 's'
			counter = counter + 2
		}
		setTimeout(()=>{
			document.querySelector('.animation').style.display = 'none';
			document.querySelector('.nameEntry').style.display = 'none';
			document.querySelector('.commandLine').style.display = 'block';
		}, 3000);
	}
	

nameUser = document.getElementById('enterButton').value
document.getElementById('userName').innerHTML = nameUser
document.getElementById('commandButton').focus()
document.getElementById('commandButton').onblur = function (event) { 
		let blurEl = this; 
			setTimeout(function() {
			    blurEl.focus()
			}, 10);
};



commandHeader = `<span class="commandHeader">
                 <span id="userName" style="color:#ffaa00;">${nameUser}</span><span style="color:white;">@</span><span style="color:#00ff9c;">ic-net</span>:$ `
input = `&#8765; <input id="commandButton" type="text" name="command" autocomplete="off" placeholder="'help' for commands" onkeyup="caller(event)">
             <div class="output"></div>`
commandBox = commandHeader + input

})



function onblur (event) { 
	let blurEl = this; 
	setTimeout(function() {
	    blurEl.focus()
	}, 10);
};


let iC = false
let iP = false
let iPW = false
let cdCommand = (command, output) => {
	if (command.split(' ')[1] == 'BIO'){
		output.innerHTML = `<p class="BIO">
		       <span style='font-weight: bold; color: #00ff9c; font-size: 24px;'> Ian Davis | DaveAce </span><br>
		       <span style='font-weight: bold; color: #ffffff; font-size: 13px;'> */ I’m a Full-Stack Developer located in Kenya. I have a serious passion for UI effects, 
                       <br>animations and creating intuitive, dynamic user experiences.</span>
                       <span style='font-weight: bold; color: #ffffff; font-size: 13px;'> <br><br>Well-organised person, problem solver, independent employee with high attention to detail. 
                       <br> Fan of NBA, outdoor activities, Video Games and English literature. <br> A family person, a son, a brother.</span>
                       <span style='font-weight: bold; color: #ffffff; font-size: 13px;'> <br><br>Interested in the entire frontend/backend spectrum and working on ambitious projects 
                       <br> with positive people. I am definitely a linux enthusiast.</span>
                       <span style='font-weight: bold; color: #ffffff; font-size: 13px;'> <br><br><a href="#cont">let's make something special.</a> /*</span>
                       </p> 
                        ${commandBox}`
	} else if (command.split(' ')[1] == 'CERTIFICATES'){
			commandBox = commandHeader + `<span>/Certificates/</span>` + input 
			iC = true
			output.innerHTML = `${commandBox}`
	} else if (command.split(' ')[1] == 'SKILLS') {
			output.innerHTML = `<div class="skills" >
				 <p>Front-end</p>
				    <div class='progress'>
				      <div class="progress-bar html"></div> 
				    </div>

				 <p>Back-end<p>
				    <div class='progress'>
				     <div class="progress-bar css"></div>
				    </div>
				
                               
				 <p>Python</p>
				   <div class='progress'>
				    <div class="progress-bar js"></div>
				   </div>

				 <p>Linux</p>
				   <div class='progress'>
				    <div class="progress-bar php"></div>
		                   </div>
                        </div><br>
                        ${commandBox}`

	} else if (command.split(' ')[1] == 'PROJECTS') {
			commandBox = commandHeader + '<span>/Projects/</span>' + input
			iP = true
			output.innerHTML = `${commandBox}`
	} else if (command.split(' ')[1] == 'WEB') {
			commandBox = commandHeader + '<span>/Web/</span>' + input
			iPW = true
			output.innerHTML = `${commandBox}`
	} else if (command.split(' ')[1] == '..') {
			commandBox = commandHeader + input 
			iC = false
			iP = false
			iPW = false
			output.innerHTML = `${commandBox}`
	} else if (command.split(' ')[1] == 'SOCIAL') {
			output.innerHTML = `<div class='certificates'>
                                              <div class ='cert'>
					        <div class='certificate'>
						  <h3>/Github</h3>
                                                <a href="https://github.com/Icreative-Co/" target='_blank'><img src="./svg icons/github.svg" style="height:30px;width:30px;"></a>
                                              </div>
                                            </div>
                                            
                                           <div class ='cert'>
					        <div class='certificate'>
						  <h3>/LinkedIn</h3>
                                                <a href="https://linkedin.com/Icreative-Co" target='_blank'><img src="./svg icons/linkedin.svg" style="height:30px;width:30px;"></a>
                                              </div>
                                            </div>
                                        
                                            <div class ='cert'>
					        <div class='certificate'>
						  <h3>/Instagram</h3>
                                                <a href="https://instagram.com/i.c.r.e.a.t.i.v.e" target='_blank'><img src="./svg icons/command.svg" style="height:30px;width:30px;"></a>
                                              </div>
                                            </div>
                                        
                                            <div class ='cert'>
					        <div class='certificate'>
						  <h3>/Twitch</h3>
                                                <a href="https:twitch.com/" target='_blank'><img src="./svg icons/terminal.svg" style="height:30px;width:30px;"></a>
                                              </div>
                                            </div>
                                           </div>
                                         ${commandBox}`

	} else if (command.split(' ')[1] == 'CONTACTS') {
			output.innerHTML = `
			<form action="https://formspree.io/" method="POST" class='form' id="cont">
				<table>
				  <tr>
				   <label>
				      <td> <input type="text" name="name" placeholder='Name:'> </td>
				   </label>
				  </tr>
				 
                                  <tr>
				    <label>
                                      <td> <input type="text" name="_replyto" placeholder='Email:'> </td>
				    </label>
				   </tr>
					
                                  <tr>
                                      <td> <textarea name="message" placeholder='Message:'></textarea> </td>
				    </label>
				  </tr>
				</table>
				<button type="submit" style="color: #ffffff; background:transparent; opacity: 1; height:20px; width:70px; box-shadow: 2px 2px 3px #00ff9c; border: 1px solid #00ff9c; font-size: 12px;">SUBMIT</button>
			</form>
			${commandBox}`
	} else {
		      output.innerHTML = `<p class="error">Directory: not found </p> ${commandBox}`	
		}
}


let caller = (event) => {
	if(event.keyCode === 13) {
		
		let cb = document.querySelectorAll('#commandButton')
		cb[cb.length-1].disabled = true

		let command = document.querySelectorAll('#commandButton')
		command = command[command.length-1].value

		let output = document.querySelectorAll('.output')[document.querySelectorAll('.output').length -1]
		
		command = command.replace(/\s+/g, " ").trim().toUpperCase();
		if (command.split(' ')[0] == 'CD') {
			if (command.split(' ')[1] == '..'){
				cdCommand(command, output)
				// output.innerHTML = `<p class="error">Error: not a recognized internal/external command.</p> ${commandBox}`
			} else if (iC || iP || iPW ){
				output.innerHTML = `<p class="error">Error: not a recognized internal/external command.</p> ${commandBox}`
			} else {
				cdCommand(command, output)

				// output.innerHTML = `<p class="error">Error: not a recognized internal/external command.</p> ${commandBox}`
				// cdCommand(command, output)
			}
		} else if (command == 'LS' || command == 'DIR') {
			if (iC) {
				output.innerHTML = `
					<div class='certificates'>

                                          <div class ='cert'>
					    <div class='certificate'>
						<h3>/C.C.N.A</h3>
                                                <a href="https://cisco.com/">verify</a>
                                             </div>
                                          </div>
                                         
                                           <div class='cert'>
                                             <div class='certificate'>
					       <h3>/Bsc I.T</h3>
                                               <a href="#" target='_blank'>verify</a>
					     </div>
                                           </div> 
                                           
                                           <div class ='cert'>
					    <div class='certificate'>
						<h3>/CEH|1</h3>
                                                <a href="https://ceh.com/" target='_blank'>verify</a>
                                             </div>
                                          </div>
                                        
                                          <div class ='cert'>
					    <div class='certificate'>
						<h3>/Adobe</h3>
                                                <a href="https://adobe.com" target='_blank'>verify</a>
                                             </div>
                                          </div>
                                              
                                         </div>
                         		${commandBox}`
		  } else if (iP) { 
				output.innerHTML = `
				<div class='certificates'>

                                          <div class ='cert'>
					    <div class='certificate'>
						<h3>/icreative co</h3>
                                                <a href="icreatves.wixsite.com/icreative-co" target='_blank'>view</a>
                                             </div>
                                          </div>
                                         
                                           <div class='cert'>
                                             <div class='certificate'>
					       <h3>/NOICE</h3>
                                               <a href="https://noice.com/" target='_blank'>view</a>
					     </div>
                                           </div> 
                                           
                                           <div class ='cert'>
					    <div class='certificate'>
						<h3>/Grou.py</h3>
                                                <a href="https://github.com/Icreative-Co/The Hub" target='_blank'>view</a>
                                             </div>
                                          </div>
                                        
                                          <div class ='cert'>
					    <div class='certificate'>
						<h3>/UMATI</h3>
                                                <a href="../UMATI/UMATI.html">view</a>
                                             </div>
                                          </div>
                                              
                                         </div>
                         		${commandBox}`
				
		} else if (iPW) { output.innerHTML = `<div class='certificates'>
                                             <div class ='cert'>
					        <div class='certificate'>
						  <h3>/Heavenly Culture</h3>
                                                <a href="https://derrick-adamaba.zyrosite.com" target='_blank'>
                                                <img src="./svg icons/github.svg" style="height:30px;width:30px;"></a>
                                              </div>
                                            </div>
                                           
                                            <div class ='cert'>
					        <div class='certificate'>
						  <h3>/Flair Shamim</h3>
                                                <a href="https://flair-shamim.zyrosite.com" target='_blank'>
                                                <img src="./svg icons/linkedin.svg" style="height:30px;width:30px;"></a>
                                              </div>
                                            </div>
                                            <div class ='cert'>
					        <div class='certificate'>
						  <h3>/Delicate Secrets</h3>
                                                <a href="https://icreatves.wixsite.com/delicate-secrets" target='_blank'>
                                                <img src="./svg icons/command.svg" style="height:30px;width:30px;"></a>
                                              </div>
                                            </div>
                                            <div class ='cert'>
					        <div class='certificate'>
						  <h3>/Uguja Merchants</h3>
                                                <a href="https://icreatves.wixsite.com/uguja-merchants" target='_blank'>
                                                <img src="./svg icons/terminal.svg" style="height:30px;width:30px;"></a>
                                              </div>
                                            </div>
                                           </div>
                                         ${commandBox}`
		} else {
				output.innerHTML = `<p class="ls">
				<div style="color: #fffc58; padding-left: 45px; line-height: normal; display:inline;">
					<p style="display:inline; padding: 30px; color: #00ff9c">BIO</p>
					<p style="display:inline; padding: 30px; color: #00ff9c">/CERTIFICATES</p>
					<p style="display:inline; padding: 30px; color: #00ff9c">SKILLS</p>
					<p style="display:inline; padding: 30px; color: #00ff9c">/PROJECTS</p>
					<p style="display:inline; padding: 30px; color: #00ff9c">/WEB</p>
					<p style="display:inline; padding: 30px; color: #00ff9c">/SOCIAL</p>
					<p style="display:inline; padding: 30px; color: #00ff9c">CONTACTS</p>
				</div>

				</p> ${commandBox}`
			}
		} else if (command == 'HELP') {
			output.innerHTML = `<p class="ls">
			<span style="font-weight: bold;">HELP MENU</span><br> 
			<span style='padding-left: 35px'>Internal defined commands:</span>
			<br>
			<div style="color: #fffc58; padding-left: 35px; line-height: normal;">
			     <p style="font-size: 12px; font-family=inherit;">HELP-----Provides Help information for ic-net commands.</p>
			     <p style="font-size: 12px; font-family=inherit;">BANNER---Display ic-net info</p>
			     <p style="font-size: 12px; font-family=inherit;">INFO-----Display system info</p>
                             <p style="font-size: 12px; font-family=inherit;">DIR------Display a list of files in a directory.</p> 
			     <p style="font-size: 12px; font-family=inherit;">LS-------View all folders and files in the directory</p>
			     <p style="font-size: 12px; font-family=inherit;">CD-------Changes the current directory</p>
                             <p style="font-size: 12px; font-family=inherit;">CD ..----Returns to previous directory</p>
			     <p style="font-size: 12px; font-family=inherit;">REFRESH--Refreshes the page.</p>
			     <p style="font-size: 12px; font-family=inherit;">CLS------Clear the page.</p>
			     <p style="font-size: 12px; font-family=inherit;">EXIT-----Quits the ic-net page.</p>
			</div>
			</p> ${commandBox}`
		} else if (command == 'BANNER' || command == 'INFO') {
			output.innerHTML = `<div class="banner">
			<span style="font-weight: bold;color:#85befd;">&nbsp;</span><br> 
                        <span style="font-weight: bold;color:#85befd;">## &nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;########&nbsp;&nbsp;&nbsp;&nbsp;##########&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#####&nbsp;&nbsp;&nbsp;############&nbsp;&nbsp;##&nbsp;&nbsp;############&nbsp;&nbsp;##########&nbsp;&nbsp;</span><br>  
                        <span style="font-weight: bold;color:#85befd;">## &nbsp;&nbsp; ## &nbsp;&nbsp;&nbsp;## &nbsp;&nbsp; ##  &nbsp; ######&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp; &nbsp;########&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;########## &nbsp;######&nbsp; &nbsp;  </span><br>
                        <span style="font-weight: bold;color:#85befd;">## &nbsp; ## &nbsp;&nbsp;&nbsp;&nbsp;## &nbsp; ##&nbsp;&nbsp; ###&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;####&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;########&nbsp;&nbsp;###&nbsp; </span><br> 
                        <span style="font-weight: bold;color:#85befd;">## &nbsp; ## &nbsp;&nbsp;&nbsp;&nbsp;######&nbsp;&nbsp; &nbsp;###&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;## &nbsp;&nbsp;&nbsp;&nbsp;###### &nbsp; ### &nbsp; </span><br> 
                        <span style="font-weight: bold;color:#85befd;">## &nbsp;&nbsp; ## &nbsp;&nbsp;&nbsp;## &nbsp; ##&nbsp;&nbsp; &nbsp;######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;##&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp; &nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;####&nbsp; &nbsp;&nbsp;&nbsp;######&nbsp;&nbsp;</span><br> 
                        <span style="font-weight: bold;color:#85befd;">## &nbsp;&nbsp&nbsp; ## &nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;##########&nbsp;&nbsp;##&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp; &nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##########&nbsp; &nbsp; v2.0</span><br> 
                        <span style="font-weight: bold;color:#85befd;"> &nbsp; </span><br><br>  
                        <span style=color:'#85befd;'></span></div>
		
			<div style="color:#00b0ff;line-height:0.9;font-family:monospace;">
			     <p style="font-size: 12px; font-family=inherit;font-weight:bold;">Host:<span style="color:  #ffffff;">localhost</span></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">OS: <span style="color:  #ffffff;">Linuxweb</span></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">Shell: <span style="color:  #ffffff;">ic-net</span></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">Theme: <span style="color:  #ffffff;">Nirvana</span></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">License: <span style="color:  #ffffff;">MIT</span></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">Version: <span style="color:  #ffffff;">2.0.1</span></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">Repo: <span style="color:  #ffffff;"><a>https://github.com/icreative-co/ic-net</a></span></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">Author: <span style="color:  #ffffff;">Dave Ace (daveace@mail.com)</span></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">Donate: <span style="color:  #ffffff;"><a>Paypal | Skrill | M-Pesa</a></span></p><br>
			     <p style="font-size: 12px; font-family=inherit;font-weight:bold;"></p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;">// This project is open-source. Type 'repo' to check out our repository</p>
			     <p style="font-size: 12px; font-family=inherit;font-weight:bold;">// Try out the new 'banner' command. See all available commands in the docs.</p> 
			     <p style="font-size: 12px; font-family=inherit;font-weight:bold;">// New command 'neofetch', for Linuxweb. </p>
                             <p style="font-size: 12px; font-family=inherit;font-weight:bold;"></p>
			
			</div> ${commandBox}`
		}  else if (command == 'REFRESH') {
			location.reload()
		} else if (command == 'CLS' || command == 'CLEARSCREEN') {
			document.querySelector('.commandLine').innerHTML = `${commandBox}`
		} else if (command == 'EXIT') {
                        document.querySelector('.container').innerHTML = `
                               <div class='exit'>
                                <div class="banner">
		                 <span style="font-weight: bold;color:#85befd;">&nbsp;</span><br> 
                                 <span style="font-weight: bold;color:#85befd;">## &nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;########&nbsp;&nbsp;&nbsp;&nbsp;##########&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#####&nbsp;&nbsp;&nbsp;############&nbsp;&nbsp;##&nbsp;&nbsp;############&nbsp;&nbsp;##########&nbsp;&nbsp;</span><br>  
                                 <span style="font-weight: bold;color:#85befd;">## &nbsp;&nbsp; ## &nbsp;&nbsp;&nbsp;## &nbsp;&nbsp; ##  &nbsp; ######&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp; &nbsp;########&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;########## &nbsp;######&nbsp; &nbsp;  </span><br>
                                 <span style="font-weight: bold;color:#85befd;">## &nbsp; ## &nbsp;&nbsp;&nbsp;&nbsp;## &nbsp; ##&nbsp;&nbsp; ###&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;####&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;########&nbsp;&nbsp;###&nbsp; </span><br> 
                                 <span style="font-weight: bold;color:#85befd;">## &nbsp; ## &nbsp;&nbsp;&nbsp;&nbsp;######&nbsp;&nbsp; &nbsp;###&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;## &nbsp;&nbsp;&nbsp;&nbsp;###### &nbsp; ### &nbsp; </span><br> 
                                 <span style="font-weight: bold;color:#85befd;">## &nbsp;&nbsp; ## &nbsp;&nbsp;&nbsp;## &nbsp; ##&nbsp;&nbsp; &nbsp;######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;##&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp; &nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;####&nbsp; &nbsp;&nbsp;&nbsp;######&nbsp;&nbsp;</span><br> 
                                 <span style="font-weight: bold;color:#85befd;">## &nbsp;&nbsp&nbsp; ## &nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;##########&nbsp;&nbsp;##&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp; &nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;##########&nbsp; &nbsp; v2.0</span><br> 
                                 <span style="font-weight: bold;color:#85befd;"> &nbsp; </span><br><br>  
                                 <span style=color:'#85befd;'></span></div>
                               </div>`

		} else {
			output.innerHTML = `<p class="error">Error: not a recognized internal/external command.</p> ${commandBox}`
		}
		let btn = document.querySelectorAll('#commandButton')
		btn = btn[btn.length-1]
		btn.focus()
	}
	window.scrollTo(0,document.body.scrollHeight);
}