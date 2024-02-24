# regarding the three js issue

# tips-
to stop zoom or rotate <OrbitControls enableZoom={false} enableRotate={false} />
1. first i got issue of mesh clipping
- the solution:
so i spend 3 hrs to find the issue and all, tried all the things that is there
like reuploading the mesh searching tutorials from the wawa sensei but none of these
helps and so i knew that let call it a day, it was 1 am and so i post a discord help in oliver discord server and one person commented that the issue might be related to position.
2. size issue 
-day2- so i saw one oliver video of a torus in r3f so what he mention was we have to 
put <b>dimension of z as 1 and rest related to it </b> thats clicks to me so i first imported the model to blender remove the amature and group the mesh(join the mesh) then i fix the dimension and then exported it to the glb file. 

3. now the thing was that there is a website or you can run npx gltfjsx public/model/tenzinreal.glb or go to [text](https://gltf.pmnd.rs/) and generate the code to use.
!dont forget to change the export const name and the dir to the model rest are same
# so finally it workkkkkkk

but now the problem was when loading in the canvas the position right so for me i need a close up shot so for me the camera was <b>camera={{ position: [0, 0,8], fov: 30 }}</b> and the group was position={[0,-2.5,6]} scale={3}. 

now done? ... haha but now there was one more problem . the rotation was going based on the pivot of the center and not with the mesh, as i have move the position of the mesh it was rotation like the mesh was rotating based on center so to
fix that
# sol 
in ur avatar.jsx put  
const groupRef = useRef();
  useFrame(() => {
    groupRef.current.rotation.y += 0.01;
  });

and assign the groupref to the group in the avatar.jsx 
  <group ref={groupRef} {...props} dispose={null}>

  so now doneee.

# nah it was not done haha, the rotation was still of, but there was a guy who really help me from the oliver discord server, that moment i got to understand the true power of global community

now what i was doing wrong was there was no need for a group or any kind of a useframe, and the soln was basically my avatar was on origin point to feet which should have been on stomach so with the position we did the -1.5 to move it down. scale={3} position={[0, -1.5, 0]} then in my avatar dont know how i wrote lookat which was causeing that problem where my mesh was origin at foot. so i remove the lookat and booom 

huge shoutout to that person who help me @Kagune 

# SO BASICALLY THE WHOLE ISSUE WAS DUE TO THAT SIMPLE ORIGIN PROBLEM SO NEXT TIME DONT FORGET TO PUT THE CANVAS TO THE CENTER
