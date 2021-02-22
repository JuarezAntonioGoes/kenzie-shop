// import React from "react";
// import { FiEdit2, FiTrash2 } from "react-icons/fi";
// import ModalDeleteTec from "../../components/InfoUser/ModalDeleteTec";
// import ModalEditTec from "../../components/InfoUser/ModalEditTec";
// import { Avatar, ButtonAddTec, Container, ContainerInfo, ContainerTec, EditarButton, Info, Sobre, Tecnologias } from "../../components/InfoUser/style";

// const Infousr = () => {
//   return (
//     <>
//       <Container>
//         <Avatar src={avatar_url ? avatar_url : ImageAvatar} alt="avatar" />
//         <Info>
//           <h1>{name}</h1>
//           <h2>
//             Módulo: <br />
//             {course_module}
//           </h2>
//         </Info>
//       </Container>

//       <ContainerInfo>
//         <Sobre>
//           <h3>Sobre</h3>
//           {bio}
//         </Sobre>

//         <ContainerTec>
//           <h4>Tecnologias</h4>

//           {techs.length ? (
//             <ul>
//               <ButtonAddTec onClick={() => setModalTec(true)}>+</ButtonAddTec>

//               {techs.map(({ id, title, status }) => (
//                 <Tecnologias key={id}>
//                   <span>{title}</span>: {status}
//                   <EditarButton onClick={handleEditTec} data-id={id}>
//                     <FiEdit2 />
//                   </EditarButton>
//                   <DeleteButton onClick={handleDeleteTec} data-id={id}>
//                     <FiTrash2 />
//                   </DeleteButton>
//                 </Tecnologias>
//               ))}
//             </ul>
//           ) : (
//             <>
//               <p>Nenhuma tecnologia cadastrada...</p>
//               <ButtonAddTec onClick={() => setModalTec(true)}>+</ButtonAddTec>
//             </>
//           )}
//         </ContainerTec>
//       </ContainerInfo>

//       {showDeleteTec && (
//         <ModalDeleteTec
//           setShowDeleteTec={setShowDeleteTec}
//           idTec={idTecDelete}
//         />
//       )}

//       {showEditTec && (
//         <ModalEditTec setShowEditTec={setShowEditTec} idTecEdit={idTecEdit} />
//       )}
//     </>
//   );
// };

// export default Infousr;
