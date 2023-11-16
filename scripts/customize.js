function changeColor(color) {
  $("#resume-header").css("background-color", color);
  $("#exp-header").css("border-bottom", "1px solid" + color);
  $("#exp-header").css("color", color);
  $("#edu-header").css("border-bottom", "1px solid" + color);
  $("#edu-header").css("color", color);
  $("#skills-header").css("border-bottom", "1px solid" + color);
  $("#skills-header").css("color", color);
  $("#projects-header").css("border-bottom", "1px solid" + color);
  $("#projects-header").css("color", color);
}

function addExp() {
  $("#exp").append(
    '<textarea name="title" id="job-title" cols="1" rows="1" placeholder="Job title"></textarea><textarea name="date" id="job-date" cols="1" rows="1" placeholder="Starting date - end date"></textarea><textarea name="job description" id="job-desc" cols="30" rows="3" placeholder="Job description"></textarea>'
  );
}
function removeExp() {
  $("#exp").children().last().remove();
  $("#exp").children().last().remove();
  $("#exp").children().last().remove();
}

function addEdu() {
  // add another edu-item div to the #edu div
  $("#edu").append(
    '<textarea name="school" id="edu-title" cols="1" rows="1" placeholder="School name"></textarea><textarea name="date" id="edu-date" cols="1" rows="1" placeholder="Starting date - end date"></textarea><textarea name="description" id="edu-desc" cols="30" rows="3" placeholder="Education description"></textarea>'
  );
}
function removeEdu() {
  $("#edu").children().last().remove();
  $("#edu").children().last().remove();
  $("#edu").children().last().remove();
}

function addSkill() {
  $("#skills ul").append(
    '<li><textarea name="skill" id="skill2" cols="30" rows="1" placeholder="Skill"></textarea></li>'
  );
}
function removeSkill() {
  $("#skills ul").children().last().remove();
}

function addProject() {
  $("#projects").append(
    '<textarea name="project name" id="project-title" cols="30" rows="1" placeholder="Project name"></textarea><textarea name="description" id="project-desc" cols="30" rows="3" placeholder="Project description"></textarea>'
  );
}
function removeProject() {
  $("#projects").children().last().remove();
  $("#projects").children().last().remove();
}
