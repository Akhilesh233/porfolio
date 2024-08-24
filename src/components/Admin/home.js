import { useRef } from "react";
import { auth, db, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { addDoc, collection } from "firebase/firestore/lite";
import './index.scss';

const Dashboard = () => {
    const form = useRef();
    
    const submitProject = (e) => {
        e.preventDefault();
        const title = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        const storageRef = ref(storage, `projects/${image.name}`);

        uploadBytes(storageRef, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    saveProject({
                        title,
                        description,
                        url,
                        image: downloadURL
                    })
                }, () => {
                    saveProject({
                        title,
                        description,
                        url,
                        image: null
                    })
                })
            }, () => {
                saveProject({
                    title,
                    description,
                    url,
                    image: null
                })
            }
        )
    }

    const saveProject = async (project) => {
        console.log(project);
        try {
            await addDoc(collection(db, 'database'), project);
            alert('Successfully added Project');
            window.location.reload(false);
        } catch (error) {
            alert('Failed to add Project');
        }
    }

    
    return (
        <div className="project-form">
            <div className="form-title">
                Form to add Project
            </div>
            <form ref={form} onSubmit={submitProject}>
                <ul>
                    <li className='half'>
                        <input placeholder='title' type='text' name='title' required />
                    </li>
                    <li>
                        <textarea placeholder='description' name='description' required />
                    </li>
                    <li className="half">
                        <input placeholder='url' type='text' name='url' required />
                    </li>
                    <li>
                        <input placeholder='image' type='file' name='image' required />
                    </li>
                    <li>
                        <button type='submit'>Submit</button>
                        <button onClick={() => auth.signOut()}>Sign out</button>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Dashboard