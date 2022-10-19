const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// crear un registro
async function main() {
  const post = await prisma.post.create({
    data: {
      title: "titulo 4",
      content: "este post es bueno",
    },
  });

  console.log(post);
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//mostrar Registros para
async function read() {
  const allPost = await prisma.post.findMany();
  console.log(allPost);
}
read()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

//mopstrar solo un valor
async function oneRead() {
  const only = await prisma.post.findUnique({
    where: {
      id: 3,
    },
  });

  console.log(only);
}

oneRead()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  

  //actualizar registros
async function updateRgister() {
  const updatePost = await prisma.post.update({
    where: {
      id: 5,
    },
    data: {
      title: "Hola mundo",
      content: "Aprende a programar",
    },
  });

  console.log(updatePost);
}

updateRgister();


// Borrar un registro
async function deleteRgister() {
  const deleteRegister = await prisma.post.delete({
    where: {
      id: 3,
    },
  });

  console.log("el post ha sido borrado", deleteRegister);
}

deleteRgister();
