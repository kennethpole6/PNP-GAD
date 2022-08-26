import {
  Button,
  FormControl,
  Grid,
  GridItem,
  Input,
  Heading,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import pnpimage from "../assets/pnp_image.png";
import qclogo from "../assets/header_image.png";
import styles from "../styles/Login.module.scss";

const login: NextPage = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" className={styles.login_form}>
      <GridItem w="100%">
        <Image
          src={pnpimage}
          layout="responsive"
          objectFit="fill"
          height="100%"
          width="100%"
        />
      </GridItem>
      <GridItem w="100%" padding="1rem 8rem">
        <div className={styles.login_header}>
          <Image src={qclogo} alt="QC logo" />
        </div>
        <br />
        <Heading>Sign In</Heading>
        <Text fontSize="lg">Login with your account.</Text>
        <br />
        <FormControl className={styles.login_form_submit}>
          <Input type="email" placeholder="Yourmail@email.com" />
          <Input type="password" placeholder="Your password" />
          <div className={styles.login_form_desc}>
            <Link href="/">Forgot password</Link>
            <Link href="/">Back to home page</Link>
          </div>
          <Button colorScheme="blue">Login</Button>
        </FormControl>
        <Text>Supported by: </Text>
        <div className={styles.login_form_img}>
          <Image src="/images/QC_Logo.svg" width={40} height={40} />
          <Image src="/images/DILG.svg" width={40} height={40} />
          <Image src="/images/QCPD.svg" width={40} height={40} />
          <Image src="/images/NCRPO_Logo.svg" width={40} height={40} />
          <Image src="/images/PNP_Logo.svg" width={40} height={40} />
        </div>
      </GridItem>
    </Grid>
  );
};

export default login;
