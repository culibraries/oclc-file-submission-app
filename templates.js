!function(){var n=Handlebars.template,l=Handlebars.templates=Handlebars.templates||{};l["tmpl-add-form"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,a,e,s){var t,o=null!=l?l:n.nullContext||{},r=a.helperMissing,i=n.escapeExpression;return'<h3> Example Add Task </h3>\n<form id="addTaskForm" class="form-stacked">\n    <fieldset>\n    <div class="col-md-4">\n        <div class="form-group">\n            <label for="x"> x </label>\n            <input type="x" name="x" class="form-control input-sm" id="x" value='+i((t=null!=(t=a.x||(null!=l?l.x:l))?t:r,"function"==typeof t?t.call(o,{name:"x",hash:{},data:s}):t))+'>\n        </div>\n        <div class="form-group">\n            <label for="y"> y </label>\n            <input type="y" name="y" class="form-control input-sm" id="y" value='+i((t=null!=(t=a.y||(null!=l?l.y:l))?t:r,"function"==typeof t?t.call(o,{name:"y",hash:{},data:s}):t))+'>\n        </div>\n        <button id="addTask" class="btn btn-info-outline btn-primary" type="button">Add Task</button>\n    </div>\n    </fieldset>\n</form>\n<div class="col-md-6"><pre id="task_result"></pre></div>\n'},useData:!0}),l["tmpl-dropzone"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,a,e,s){var t,o=null!=l?l:n.nullContext||{},r=a.helperMissing,i=n.escapeExpression;return'<div id="dropzone" class="center">\n  <form id="dropzone1" action="/api/upload/" class="dropzone needsclick" >\n    <div style="display:none">\n      <input type="hidden" name="csrfmiddlewaretoken" value="'+i((t=null!=(t=a.csrftoken||(null!=l?l.csrftoken:l))?t:r,"function"==typeof t?t.call(o,{name:"csrftoken",hash:{},data:s}):t))+'"/>\n    </div>\n    <div style="display:none">\n      <input type="hidden" name="callback" value="'+i((t=null!=(t=a.task||(null!=l?l.task:l))?t:r,"function"==typeof t?t.call(o,{name:"task",hash:{},data:s}):t))+'"/>\n    </div>\n    <div style="display:none">\n      <input type="hidden" name="tags" value="'+i((t=null!=(t=a.tags||(null!=l?l.tags:l))?t:r,"function"==typeof t?t.call(o,{name:"tags",hash:{},data:s}):t))+'"/>\n    </div>\n    <div class="dz-message needsclick center">\n      <strong>Drop pdf files here or click to upload.</strong>\n    </div>\n  </form>\n</div>\n<script>\n      Dropzone.autoDiscover = false;\n      $("#dropzone1").dropzone({\n          url: "/api/upload/",\n          maxFilesize: 10000,\n          uploadMultiple: false,\n          addRemoveLinks: true,\n          acceptedFiles: ".pdf",\n          init: function() {\n            this.on("complete", function(file) {\n              this.removeFile(file);\n            });\n            this.on("success",function(file,response){\n              console.log(response);\n              load_task_history(user_task_url);\n              showResult(response[0].callback.response.result_url);\n            });\n            this.on("error", function(file){\n              if (!file.accepted){alert("File must be a pdf file.");}\n              this.removeFile(file);\n            });\n          }\n      });\n<\/script>\n'},useData:!0}),l["tmpl-tr"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,a,e,s){var t,o=null!=l?l:n.nullContext||{},r=a.helperMissing,i=n.escapeExpression;return'<tr><td><a href="#" onclick="showResult(\''+i((t=null!=(t=a.result||(null!=l?l.result:l))?t:r,"function"==typeof t?t.call(o,{name:"result",hash:{},data:s}):t))+"');return false;\" >"+i((t=null!=(t=a.task_name||(null!=l?l.task_name:l))?t:r,"function"==typeof t?t.call(o,{name:"task_name",hash:{},data:s}):t))+"</a></td><td>"+i((t=null!=(t=a.timestamp||(null!=l?l.timestamp:l))?t:r,"function"==typeof t?t.call(o,{name:"timestamp",hash:{},data:s}):t))+"</td><td>"+i((a.json_metatags||l&&l.json_metatags||r).call(o,null!=l?l.tags:l,{name:"json_metatags",hash:{},data:s}))+"</td></tr>\n"},useData:!0}),l["tmpl-user"]=n({compiler:[7,">= 4.0.0"],main:function(n,l,a,e,s){var t,o=null!=l?l:n.nullContext||{},r=a.helperMissing,i="function",d=n.escapeExpression;return'      <h2>User Profile</h2>\n      <div id="user_profile">\n          <div id="photo" class="col-md-2" style="width:200px ">\n            <img src="'+d((t=null!=(t=a.gravator_url||(null!=l?l.gravator_url:l))?t:r,typeof t===i?t.call(o,{name:"gravator_url",hash:{},data:s}):t))+'?s=180&d=mm"><br><br>\n            <a href="https://en.gravatar.com/" target="_blank" style="clear:both;">Profile Image</a><br><br>\n            <a id="reset_password" style="clear:both;">Reset Password</a>\n          </div>\n          <form  id="view_form" class="form-horizontal col-md-4" onsubmit="return edit_user();">\n              <div class="form-group">\n                <label class="col-md-3 control-label">Username</label>\n                  <div class="col-md-09">\n                <p class="form-control-static">'+d((t=null!=(t=a.username||(null!=l?l.username:l))?t:r,typeof t===i?t.call(o,{name:"username",hash:{},data:s}):t))+'</p>\n                </div>\n            </div>\n             <div class="form-group">\n                  <label class="col-md-3 control-label">Name</label>\n                    <div class="col-md-09">\n                  <p class="form-control-static">'+d((t=null!=(t=a.name||(null!=l?l.name:l))?t:r,typeof t===i?t.call(o,{name:"name",hash:{},data:s}):t))+'</p>\n                  </div>\n            </div>\n              <div class="form-group">\n                <label class="col-md-3 control-label">Email</label>\n                  <div class="col-md-09">\n                    <p class="form-control-static">'+d((t=null!=(t=a.email||(null!=l?l.email:l))?t:r,typeof t===i?t.call(o,{name:"email",hash:{},data:s}):t))+'</p>\n                 </div>\n             </div>\n             <button type="submit" id="form_submit" class="btn btn-default pull-right" style="margin-right:40px;">Edit</button>\n         </form>\n          <form class="col-md-4" id="user_form" onsubmit="return submit_user();">\n              <div style="display:none">\n                  <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=a.csrftoken||(null!=l?l.csrftoken:l))?t:r,typeof t===i?t.call(o,{name:"csrftoken",hash:{},data:s}):t))+'"/>\n             </div>\n              <div class="form-group">\n                 <label for="first_name">First Name</label>\n                  <input type="text" class="form-control" name="first_name" placeholder="John" value="'+d((t=null!=(t=a.first_name||(null!=l?l.first_name:l))?t:r,typeof t===i?t.call(o,{name:"first_name",hash:{},data:s}):t))+'">\n             </div>\n              <div class="form-group">\n                   <label for="last_name">Last Name</label>\n                    <input type="text" class="form-control" name="last_name" placeholder="Doe" value="'+d((t=null!=(t=a.last_name||(null!=l?l.last_name:l))?t:r,typeof t===i?t.call(o,{name:"last_name",hash:{},data:s}):t))+'">\n               </div>\n              <div class="form-group">\n                 <label for="email">Email address</label>\n                  <input type="email" class="form-control" name="email" placeholder="Enter email" value="'+d((t=null!=(t=a.email||(null!=l?l.email:l))?t:r,typeof t===i?t.call(o,{name:"email",hash:{},data:s}):t))+'">\n             </div>\n             <button type="submit" id="form_submit1" class="btn btn-default pull-right">Update</button>\n         </form>\n         <div class="row" style="width:100%;clear:both;"></div>\n          <form class="form-inline" id="pass_form" onsubmit="return set_password();" style="display:none">\n            <div style="display:none">\n                    <input type="hidden" name="csrfmiddlewaretoken" value="'+d((t=null!=(t=a.csrftoken||(null!=l?l.csrftoken:l))?t:r,typeof t===i?t.call(o,{name:"csrftoken",hash:{},data:s}):t))+'"/>\n           </div>\n            <div class="form-group">\n             <label for="password">New Password</label>\n              <input type="password" class="form-control" name="password" placeholder="New Password">\n           </div>\n            <div class="form-group">\n             <label for="password2">Retype New Password</label>\n              <input type="password" class="form-control" name="password2" placeholder="Retype New Password">\n           </div>\n           <button type="submit" class="btn btn-default">Set Password</button>\n         </form>\n     </div>\n'},useData:!0})}();
