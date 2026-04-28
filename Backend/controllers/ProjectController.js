import Project from '../model/Project.js';

export const addProject = async(req,res)=>{
    const {ProjectName,TechStack,Description} = req.body;
    const {userId} = req.user;

    if(!ProjectName || !TechStack || !Description){
        return res.status(400).json({
        success: false,
        message: "All required fields must be provided"
      });
    }

    try{
        const newProject = await Project.create({
            ProjectName,
            ProjectOwnerId:userId,
            TechStack,
            Description
        })

        res.status(201).json({
        success: true,
        message: "Project created successfully",
        data: newProject
        });
    }catch(err){
        res.status(500).json({
        success: false,
        message: err.message
        });
    }
}

export const getProject = async(req,res)=>{
    try {

    const projects = await Project.find();

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
}